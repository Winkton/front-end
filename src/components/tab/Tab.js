import { React } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  cursor: pointer;
  padding: 20px 0;
  font-size: ${(props) => {
    return props.isActive ? '18px' : '18px';
  }};
  color: ${(props) => {
    return props.isActive ? '#6D6D6D' : '#ccc';
  }};
  border-bottom: ${(props) => {
    return props.isActive ? '3px solid #6D6D6D' : '1.5px solid #ccc';
  }};
`;

const Tab = ({ activeTab, setActiveTab }) => {
  return (
    <Container>
      <TabItem
        isActive={activeTab === '게시글'}
        onClick={() => {
          setActiveTab('게시글');
        }}
      >
        게시글
      </TabItem>
      <TabItem
        isActive={activeTab === '리포스트'}
        onClick={() => {
          setActiveTab('리포스트');
        }}
      >
        리포스트
      </TabItem>
    </Container>
  );
};

export default Tab;
