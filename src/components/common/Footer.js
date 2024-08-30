import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #dcdada;
  border-bottom: 1px solid #d9d9d9;
`;

export default function Footer() {
  return (
    <Container>
      <div>Footer</div>
    </Container>
  );
}
