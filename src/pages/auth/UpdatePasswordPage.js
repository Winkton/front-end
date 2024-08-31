import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { ReactComponent as AuthBackground1 } from '../../assets/auth/AuthBackground1.svg';
import { ReactComponent as AuthBackground2 } from '../../assets/auth/AuthBackground2.svg';
import AuthInput from '../../components/input/AuthInput';
import LogoText from '../../components/logo/LogoText';
import AuthButton from '../../components/button/AuthButton';
import { updatePassword } from '../../api/Auth';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const AuthBackground1Styled = styled(AuthBackground1)`
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  z-index: 0;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
  z-index: 1;
`;

const AuthBackground2Styled = styled(AuthBackground2)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: auto;
  height: auto;
  z-index: 0;
`;

export default function updatePasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [retryNewPassword, setRetryNewPassword] = useState('');
  const navigate = useNavigate();

  const handleUpdatePassword = async () => {
    const updatePasswordData = {
      newPassword,
    };

    if (retryNewPassword !== newPassword) {
      alert('입력한 비밀번호와 일치하지 않습니다.');
      return;
    }

    try {
      const responseBody = await updatePassword(updatePasswordData);
      if (responseBody) {
        alert('비밀번호 변경에 성공하였습니다.');
        navigate('/login');
      } else {
        alert('아이디 찾기 실패. 다시 시도해주세요.');
      }
    } catch (error) {
      alert('아이디 찾기 중 오류가 발생했습니다.');
    }
  };

  return (
    <Container>
      <AuthBackground1Styled />
      <Logo />
      <LogoText logoText="한국 거주 유학생들을 위한 한국 문화 커뮤니티 플랫폼" />
      <ContentArea>
        <AuthInput
          placeholder="새 비밀번호를 입력해주세요"
          value={newPassword}
          onChange={(e) => {
            return setNewPassword(e.target.value);
          }}
        />
        <AuthInput
          placeholder="다시 입력해주세요"
          value={newPassword}
          onChange={(e) => {
            return setRetryNewPassword(e.target.value);
          }}
        />
        <AuthButton value="비밀변호 재설정" onClick={handleUpdatePassword} />
      </ContentArea>
      <AuthBackground2Styled />
    </Container>
  );
}
