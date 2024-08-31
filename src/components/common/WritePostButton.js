import React from 'react';
import styled from 'styled-components';
import WriteIcon from '../../assets/WriteIcon.svg';

const Container = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 50px;
  background-color: var(--background-color);
  border-bottom: 0.5px solid #e7e7e7;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const WriteImage = styled.img`
  width: 24px;
  height: 24px;
`;

export default function WritePostButton({ onClick }) {
  return (
    <Container onClick={onClick}>
      <WriteImage src={WriteIcon} />
    </Container>
  );
}
