import React, { useState } from 'react';
import styled from 'styled-components';
import menuIcon from '../../assets/post/menuIcon.svg';
// import activeHeart from '../../assets/post/activeHeart.svg';
import deActiveHeart from '../../assets/post/deActiveHeart.svg';
import chatIcon from '../../assets/post/chatIcon.svg';
import repostIcon from '../../assets/post/repostIcon.svg';
import shareIcon from '../../assets/post/shareIcon.svg';
import getTimeDifference from '../../util/getTimeDifference';

const UserImage = styled.div`
  width: 50px;
  height: 50px;
  background-color: #bed7ff;
  border-radius: 50%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 25px 40px;
  border-bottom: 1px solid #ccc;
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 65px;
`;

const TextArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
`;

const ReadOnlyTextArea = styled.div`
  width: 100%;
  font-size: 18px;
  padding: 10px 0;
  color: #333;
  outline: none;
  cursor: default;
  line-height: 1.5;
  max-height: ${({ expanded }) => {
    return expanded ? 'none' : '4.5em';
  }};
  overflow: hidden;
  position: relative;

  &:after {
    content: ${({ expanded }) => {
      return expanded ? '' : '...';
    }};
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: white;
    padding-left: 5px;
  }
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  padding: 5px 0;
  text-align: left;
`;

const IconArea = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 20px;
`;

const Text = styled.div`
  font-size: 24px;
`;

const TimeText = styled(Text)`
  color: #ccc;
`;

const IconImage = styled.img`
  width: ${({ size }) => {
    return size || '24px';
  }};
  height: ${({ size }) => {
    return size || '24px';
  }};
  cursor: pointer;
`;

export default function TextQuizPost({ post }) {
  const [expanded, setExpanded] = useState(false);

  const icons = [
    {
      src: deActiveHeart,
      action: 'heart',
      size: '26px',
    },
    {
      src: repostIcon,
      action: 'repost',
      size: '26px',
    },
    {
      src: chatIcon,
      action: 'chat',
      size: '26px',
    },
    {
      src: shareIcon,
      action: 'share',
      size: '26px',
    },
  ];

  const handleToggle = () => {
    return setExpanded(!expanded);
  };

  return (
    <Container>
      <UserArea>
        <UserImage />
        <TextArea>
          <Text>{post.author}</Text>
          <TimeText>{getTimeDifference(post.created_at)}</TimeText>
        </TextArea>
        <IconImage src={menuIcon} size="24px" alt="menu icon" />
      </UserArea>
      <ContentArea>
        <ReadOnlyTextArea expanded={expanded}>{post.content}</ReadOnlyTextArea>
        {expanded ? (
          <MoreButton onClick={handleToggle}>줄이기</MoreButton>
        ) : (
          <MoreButton onClick={handleToggle}>더 보기</MoreButton>
        )}
        <IconArea>
          {icons.map(({ src, action, size }) => {
            return (
              <div key={action}>
                <IconImage src={src} size={size} alt={`${action} icon`} />
              </div>
            );
          })}
        </IconArea>
      </ContentArea>
    </Container>
  );
}
