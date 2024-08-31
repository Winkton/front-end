import React, { useState } from 'react';
import styled from 'styled-components';

// 스타일 설정
const FollowButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 49px;
  padding: 22px;
  border-radius: 15px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  text-color: #000000;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
`;

// FollowButton 컴포넌트
function FollowButton({ initialState }) {
  const [isFollowing, setIsFollowing] = useState(initialState === '팔로잉');

  const handleClick = () => {
    setIsFollowing((prevState) => {
      return !prevState;
    });
  };

  return (
    <FollowButtonDiv isFollowing={isFollowing} onClick={handleClick}>
      {isFollowing ? '팔로잉' : '팔로우'}
    </FollowButtonDiv>
  );
}

export default FollowButton;
