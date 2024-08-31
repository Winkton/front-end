import React from 'react';
import styled from 'styled-components';

export default function WriteModal({ text }) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 50px;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  background-color: var(--background-color);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 1001;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Text = styled.div`
  font-size: 24px;
`;
