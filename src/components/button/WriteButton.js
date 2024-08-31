import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: var(--background-color);
  cursor: pointer;
`;

const Text = styled.div`
  font-weight: var(--font-normal);
  font-size: 20px;
`;

export default function WriteButton({ onClick }) {
  return (
    <Container onClick={onClick}>
      <Text>게시</Text>
    </Container>
  );
}
