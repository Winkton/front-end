import React, { useState } from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import WritePostButton from '../components/common/WritePostButton';
import WriteModal from '../components/WriteModal';
import SearchUser from '../components/user/SearchUser';
import SearchInput from '../components/input/SearchInput';

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
  // const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // 더미 데이터
  const searchUsers = [
    { userId: 'user1', username: 'John Doe', count: 150 },
    { userId: 'user2', username: 'Jane Smith', count: 200 },
    { userId: 'user3', username: 'Alice Johnson', count: 300 },
    { userId: 'user4', username: 'Bob Brown', count: 400 },
  ];

  const onClickInput = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <Header />
      <WrapperArea>
        <ContentArea>
          <SearchInput />
          {searchUsers.map((user) => {
            return (
              <SearchUser
                key={user.userId}
                userId={user.userId}
                username={user.username}
                count={user.count}
              />
            );
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
