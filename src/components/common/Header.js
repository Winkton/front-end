import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color);
  border-bottom: 1px solid #d9d9d9;
  z-index: 1000;
`;

export default function Header() {
  return (
    <Container>
      <div>Header</div>
    </Container>
  );
}
