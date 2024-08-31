import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import WritePostButton from '../components/common/WritePostButton';
import WirteInput from '../components/input/WirteInput';
import WriteModal from '../components/WriteModal';

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

export default function MainPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const onClickProfileImage = () => {
    navigate('/profile');
  };

  const onClickInput = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <Header />
      <WrapperArea>
        <ContentArea>
          <WirteInput
            onClickProfileImage={onClickProfileImage}
            onClickInput={onClickInput}
          />
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
