import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import Header from '../components/common/Header';
import WritePostButton from '../components/common/WritePostButton';
import WriteModal from '../components/WriteModal';
import SearchUser from '../components/user/SearchUser';
import SearchInput from '../components/input/SearchInput';
import { findUsers, followUser } from '../api/Post';
import userState from '../store/userState';

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
  height: 100%;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export default function SearchPage() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userInfo = useRecoilValue(userState);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await findUsers(userInfo.userId);
        setUsers(data);
      } catch (err) {
        setError('사용자 데이터를 가져오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, [userInfo.userId]);

  const onClickInput = () => {
    setShowModal(true);
  };

  const handleFollowClick = async (targetUserId) => {
    try {
      await followUser(userInfo.userId, targetUserId);
      const updatedUsers = await findUsers(userInfo.userId);
      setUsers(updatedUsers);
    } catch (err) {
      alert('팔로우 중 오류가 발생했습니다.');
    }
  };

  return (
    <Container>
      <Header />
      <WrapperArea>
        <ContentArea>
          <SearchInput />
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            users.map((user) => {
              return (
                <SearchUser
                  key={user.id}
                  userId={user.id}
                  username={user.name}
                  followed={user.followed}
                  followerCount={user.followerCount}
                  onFollowClick={() => {
                    return handleFollowClick(user.id);
                  }} // userId 전달
                />
              );
            })
          )}
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
