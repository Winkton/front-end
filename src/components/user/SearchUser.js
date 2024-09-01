import React from 'react';
import styled from 'styled-components';
import FollowButton from '../button/FollowButton';

const SearchUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #cccccc;
  padding: 0 40px;
`;

const UserDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ImageDiv = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #bed7ff;
`;

const IdNameDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const IdDiv = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

const NameDiv = styled.div`
  color: #868686;
  font-size: 20px;
`;

const FollowerCountDiv = styled.div`
  font-size: 20px;
  margin-left: 80px;
  margin-bottom: 25px;
`;

export default function SearchUser({
  userId,
  username,
  followed,
  followerCount,
  onFollowClick,
}) {
  return (
    <SearchUserContainer>
      <UserDiv>
        <ProfileDiv>
          <ImageDiv />
          <IdNameDiv>
            <IdDiv>{userId}</IdDiv>
            <NameDiv>{username}</NameDiv>
          </IdNameDiv>
        </ProfileDiv>
        <FollowButton initialState={followed} onClick={onFollowClick} />
      </UserDiv>
      <FollowerCountDiv>팔로워 {followerCount}명</FollowerCountDiv>
    </SearchUserContainer>
  );
}
