import React from 'react';
import styled from 'styled-components';

const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export default function Backdrop({ onClick }) {
  return <BackdropContainer onClick={onClick} />;
}
