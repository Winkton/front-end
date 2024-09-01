import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import PostHashTagButton from './button/PostHashTagButton';
import WriteButton from './button/WriteButton';
import { createOx, createQnA } from '../api/Post';
import userState from '../store/userState';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 50px;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  background-color: var(--background-color);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 1001;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 46.5%;
  transform: translate(-50%, -50%);
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ImageDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #bed7ff;
`;

const IdDiv = styled.div`
  font-size: 24px;
`;

const HashTagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin: 20px;
`;

const PostBody = styled.textarea`
  all: unset;
  width: 100%;
  margin-left: 60px;
  margin-right: 60px;
  font-size: 16px;
  resize: none;
  white-space: pre-wrap; /* 텍스트가 자동으로 줄바꿈 되도록 설정 */
  word-wrap: break-word; /* 긴 단어가 있을 경우 줄바꿈이 가능하도록 설정 */
`;

const WriteButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export default function WriteModal() {
  const userInfo = useRecoilValue(userState);
  const [selectedTag, setSelectedTag] = useState('O/X');
  const [createForm, setCreateForm] = useState({
    content: '',
  });
  const navigate = useNavigate();

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    setCreateForm((prevForm) => {
      return { ...prevForm, type: tag };
    });
  };

  const onCreate = async () => {
    try {
      if (selectedTag === 'O/X') {
        await createOx(createForm, userInfo.userId);
        alert('O/X 게시글이 생성되었습니다.');
      } else if (selectedTag === 'Q&A') {
        await createQnA(createForm, userInfo.userId);
        alert('Q&A 게시글이 생성되었습니다.');
      } else {
        alert('게시글이 이상해요.');
      }
      navigate('/main');
    } catch (error) {
      alert('게시글 생성 중 오류가 발생했습니다.');
    }
  };

  const handleContent = (e) => {
    const { value } = e.target;
    setCreateForm((prevForm) => {
      return {
        ...prevForm,
        content: value,
      };
    });
  };

  return (
    <Container>
      <HeaderContainer>
        <PostHeader>
          <ImageDiv />
          <IdDiv>{userInfo.userId}</IdDiv>
        </PostHeader>
        <HashTagContainer>
          <PostHashTagButton
            type="O/X"
            active={selectedTag === 'O/X'}
            onClick={() => {
              return handleTagClick('O/X');
            }}
          />
          <PostHashTagButton
            type="Q&A"
            active={selectedTag === 'Q&A'}
            onClick={() => {
              return handleTagClick('Q&A');
            }}
          />
        </HashTagContainer>
      </HeaderContainer>
      <PostBody
        name="content"
        value={createForm.content}
        placeholder="게시글을 작성하시오."
        onChange={handleContent}
      />
      <WriteButtonDiv>
        <WriteButton onClick={onCreate} />
      </WriteButtonDiv>
    </Container>
  );
}
