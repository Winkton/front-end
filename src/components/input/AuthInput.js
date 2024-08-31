import React from 'react';
import styled from 'styled-components';

const AuthInputBox = styled.input`
  width: 399px;
  height: 65px;
  border-radius: 10px;
  background-color: #fafafa;
  padding-left: 22px;
  padding-right: 22px;
`;

function AuthInput({ name, placeholder, type = 'text', value, onChange }) {
  return (
    <AuthInputBox
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}

export default AuthInput;
