import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { ReactComponent as AuthBackground1 } from '../../assets/auth/AuthBackground1.svg';
import { ReactComponent as AuthBackground2 } from '../../assets/auth/AuthBackground2.svg';
import AuthInput from '../../components/input/AuthInput';
import LogoText from '../../components/logo/LogoText';
import AuthButton from '../../components/button/AuthButton';
import { signUp } from '../../api/Auth';

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

export default function SignupPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    const signupData = {
      userId,
      password,
      username,
      country,
    };

    try {
      const responseBody = await signUp(signupData);
      if (responseBody) {
        alert('회원가입에 성공하였습니다.');
        navigate('/');
      } else {
        alert('회원가입 실패. 다시 시도해주세요.');
      }
    } catch (error) {
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };

  return (
    <Container>
      <AuthBackground1Styled />
      <Logo />
      <LogoText logoText="한국 거주 유학생들을 위한 한국 문화 커뮤니티 플랫폼" />
      <ContentArea>
        <AuthInput
          name="username"
          placeholder="이름을 입력해주세요"
          value={username}
          onChange={(e) => {
            return setUsername(e.target.value);
          }}
        />
        <AuthInput
          name="userId"
          placeholder="아이디를 입력해주세요"
          value={userId}
          onChange={(e) => {
            return setUserId(e.target.value);
          }}
        />
        <AuthInput
          name="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          type="password"
          onChange={(e) => {
            return setPassword(e.target.value);
          }}
        />
        <AuthInput
          name="country"
          placeholder="국가를 입력해주세요"
          value={country}
          onChange={(e) => {
            return setCountry(e.target.value);
          }}
        />
        <AuthButton value="가입하기" onClick={handleSignup} />
      </ContentArea>
      <AuthBackground2Styled />
    </Container>
  );
}
