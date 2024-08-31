import React, { useState } from 'react';
import styled from 'styled-components';

const FollowButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 49px;
  padding: 22px;
  border-radius: 15px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  color: #000000;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
`;

function FollowButton({ initialState, onClick }) {
  const [isFollowing, setIsFollowing] = useState(initialState === '팔로잉');

  const handleClick = () => {
    setIsFollowing((prevState) => {
      const newState = !prevState;
      onClick(); // 수정된 부분
      return newState;
    });
  };

  return (
    <FollowButtonDiv isFollowing={isFollowing} onClick={handleClick}>
      {isFollowing ? '팔로잉' : '팔로우'}
    </FollowButtonDiv>
  );
}

export default FollowButton;
