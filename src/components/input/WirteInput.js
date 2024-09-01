import React from 'react';
import styled from 'styled-components';
import UserProfile from '../../assets/UserProfile.svg';
import WriteButton from '../button/WriteButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0px 40px;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 30px 30px 0px 0px;
  border-bottom: 1px solid #d9d9d9;
  background: var(--background-color);
`;

const UserProfileImage = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const WriteInputItem = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: transparent;
  box-sizing: border-box;
  &::placeholder {
    color: #cdcdcd;
  }
`;

export default function WirteInput({ onClickProfileImage, onClickInput }) {
  return (
    <Container>
      <UserProfileImage src={UserProfile} onClick={onClickProfileImage} />
      <WriteInputItem
        placeholder="게시글을 작성하세요..."
        onClick={onClickInput}
        readOnly
      />
      <WriteButton onClick={onClickInput} />
    </Container>
  );
}
