import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
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

export default function UpdatePasswordPage() {
  const [passwordForm, setPasswordForm] = useState({
    newPassword: '',
    retryNewPassword: '',
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = location.state || {};

  const handleUpdatePassword = async () => {
    const { newPassword, retryNewPassword } = passwordForm;

    if (retryNewPassword !== newPassword) {
      alert('입력한 비밀번호와 일치하지 않습니다.');
      return;
    }

    try {
      const updatePasswordData = {
        userId,
        password: newPassword,
      };
      const responseBody = await updatePassword(updatePasswordData);

      if (responseBody.Message === '비밀번호 변경 완료') {
        alert('비밀번호 변경에 성공하였습니다.');
        navigate('/login');
      } else {
        alert('비밀번호 변경 실패. 다시 시도해주세요.');
      }
    } catch (error) {
      alert('비밀번호 변경 중 오류가 발생했습니다.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <Container>
      <AuthBackground1Styled />
      <Logo />
      <LogoText logoText="한국 거주 유학생들을 위한 한국 문화 커뮤니티 플랫폼" />
      <ContentArea>
        <AuthInput
          name="newPassword"
          placeholder="새 비밀번호를 입력해주세요"
          type="password"
          value={passwordForm.newPassword}
          onChange={handleInputChange}
        />
        <AuthInput
          name="retryNewPassword"
          placeholder="다시 입력해주세요."
          type="password"
          value={passwordForm.retryNewPassword}
          onChange={handleInputChange}
        />
        <AuthButton value="비밀번호 재설정" onClick={handleUpdatePassword} />
      </ContentArea>
      <AuthBackground2Styled />
    </Container>
  );
}
