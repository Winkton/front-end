import styled from 'styled-components';
import FollowButton from '../button/FollowButton';

const SearchUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #cccccc;
  padding-left: 40px;
  padding-right: 40px;
`;

const UserDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ImageDiv = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
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
  text-color: #868686;
  font-size: 20px;
`;

const FollowerCountDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  margin-left: 80px;
  margin-bottom: 25px;
`;

export default function SearchUser({ userId, username, count }) {
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
        <FollowButton state="팔로우" />
      </UserDiv>
      <FollowerCountDiv>팔로워 {count}명</FollowerCountDiv>
    </SearchUserContainer>
  );
}
