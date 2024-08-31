import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import WritePostButton from '../components/common/WritePostButton';
import Backdrop from '../components/common/Backdrop';
import WriteModal from '../components/WriteModal';
import OxQuizPost from '../components/post/OxQuizPost';
import TextQuizPost from '../components/post/TextQuizPost';
import ProfileIcon from '../assets/ProfileIcon.svg';
import Tab from '../components/tab/Tab';

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
                <NameText>sxxnoudxx</NameText>
                <FollowerText>팔로워 32명</FollowerText>
                <CountryText>대한민국</CountryText>
              </UserInfo>
              <ProfileImage src={ProfileIcon} />
            </UserInfoArea>
            <ModifyProfileButton>프로필 수정</ModifyProfileButton>
          </InfoArea>
          {/* Add Tab component here */}
          <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
          {/* Render content based on active tab */}
          <OxQuizPost />
          <TextQuizPost />
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
