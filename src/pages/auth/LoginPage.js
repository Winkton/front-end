import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import AuthInput from '../../components/input/AuthInput';
import AuthButton from '../../components/button/AuthButton';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { ReactComponent as AuthBackground1 } from '../../assets/auth/AuthBackground1.svg';
import { ReactComponent as AuthBackground2 } from '../../assets/auth/AuthBackground2.svg';
import LogoText from '../../components/logo/LogoText';
import { login } from '../../api/Auth';
import { useSetRecoilState } from 'recoil';
import userState from '../../store/userState';

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
  z-index: 1;
`;

const LinkWrapper = styled.span`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 22px;
  margin-bottom: 34px;
  gap: 10px;
`;

const StyledLink = styled(Link)`
  text-align: right;
`;

const SignupText = styled.text`
  text-align: center;
  color: #868686;
`;

const SignupWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 10px;
`;

const AuthBackground2Styled = styled(AuthBackground2)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: auto;
  height: auto;
  z-index: 0;
`;

export default function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  const handleLogin = async () => {
    const loginData = {
      userId,
      password,
    };

    const response = await login(loginData);
    if (response) {
      setUser({
        userId: response.userId,
        username: response.username,
        country: response.country,
      });
      navigate('/');
    } else {
      // 로그인 실패 처리
      alert('로그인 실패. 다시 시도해주세요.');
    }
  };

  return (
    <Container>
      <AuthBackground1Styled />
      <Logo />
      <LogoText logoText="한국 거주 유학생들을 위한 한국 문화 커뮤니티 플랫폼" />
      <ContentArea>
        <AuthInput
          name="userId"
          placeholder="아이디를 입력해주세요"
          value={userId}
          onChange={(e) => {
            return setUserId(e.target.value);
          }}
        />
        <LinkWrapper>
          <AuthInput
            name="password"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            value={password}
            onChange={(e) => {
              return setPassword(e.target.value);
            }}
          />
          <StyledLink to="/searchId">비밀번호를 잊으셨나요?</StyledLink>
        </LinkWrapper>
        <AuthButton type="submit" value="로그인" onClick={handleLogin} />
        <SignupWrapper>
          <SignupText>한큐가 처음이신가요?</SignupText>
          <StyledLink to="/signup">회원가입</StyledLink>
        </SignupWrapper>
      </ContentArea>
      <AuthBackground2Styled />
    </Container>
  );
}
