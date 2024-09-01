import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import userState from '../store/userState';
import Header from '../components/common/Header';
import WritePostButton from '../components/common/WritePostButton';
import Backdrop from '../components/common/Backdrop';
import WriteModal from '../components/WriteModal';
import OxQuizPost from '../components/post/OxQuizPost';
import TextQuizPost from '../components/post/TextQuizPost';
import ProfileIcon from '../assets/ProfileIcon.svg';
import Tab from '../components/tab/Tab';
import { getAllMyQAPosts, getAllMyOXPosts } from '../api/Post'; // API 함수 임포트

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
`;

const WrapperArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  max-width: 700px;
  width: 100%;
  background-color: var(--background-color);
  box-sizing: border-box;
  border-radius: 30px 30px 0px 0px;
  border: 0.5px #d9d9d9 solid;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow-y: scroll;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
  gap: 70px;
`;

const UserInfoArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModifyProfileButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  font-size: 20px;
  font-weight: var(--font-semibold);
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
`;

const NameText = styled.div`
  font-size: 32px;
  font-weight: var(--font-semibold);
`;

const FollowerText = styled.div`
  font-size: 20px;
  font-weight: var(--font-semibold);
  color: #868686;
`;

const CountryText = styled.div`
  font-size: 14px;
  color: #868686;
`;

export default function MyPage() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('게시글');
  const [user] = useRecoilState(userState);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (user && user.userId) {
        try {
          const [qaResponse, oxResponse] = await Promise.all([
            getAllMyQAPosts(user.userId, user.userId), // 자신의 게시물 가져오기
            getAllMyOXPosts(user.userId, user.userId), // 자신의 OX 퀴즈 가져오기
          ]);

          // QA와 OX 포스트 통합
          const combinedPosts = [
            ...qaResponse.result.map((post) => {
              return { ...post, postType: 'QA' };
            }),
            ...oxResponse.result.map((post) => {
              return { ...post, postType: 'OX' };
            }),
          ];

          // 최신 날짜 순으로 정렬
          const sortedPosts = combinedPosts.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
          });

          setPosts(sortedPosts);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      }
    };

    fetchPosts();
  }, [user]);

  const onClickInput = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <Header />
      <WrapperArea>
        <ContentArea>
          <InfoArea>
            <UserInfoArea>
              <UserInfo>
                <NameText>{user.username}</NameText>
                <FollowerText>팔로워 32명</FollowerText>
                <CountryText>{user.country}</CountryText>
              </UserInfo>
              <ProfileImage src={ProfileIcon} />
            </UserInfoArea>
            <ModifyProfileButton>프로필 수정</ModifyProfileButton>
          </InfoArea>
          <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
          {/* 포스트 렌더링 */}
          {posts.map((post) => {
            if (post.postType === 'OX') {
              return <OxQuizPost key={post.id} post={post} />;
            }
            return <TextQuizPost key={post.id} post={post} />;
          })}
        </ContentArea>
      </WrapperArea>
      <WritePostButton onClick={onClickInput} />
      {showModal && (
        <>
          <Backdrop
            onClick={() => {
              return setShowModal(false);
            }}
          />
          <WriteModal text="게시글 작성 모달임" />
        </>
      )}
    </Container>
  );
}
