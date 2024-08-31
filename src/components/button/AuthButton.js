import React from 'react';
import styled from 'styled-components';

const AuthButtonBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  padding: 22px;
  border-radius: 30px;
  background-color: #87b3ff;
  border: 1px solid #ffffff;
  color: #ffffff;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

function AuthButton({ value, type = 'button', onClick }) {
  return (
    <AuthButtonBox type={type} onClick={onClick}>
      {value}
    </AuthButtonBox>
  );
}

export default AuthButton;
