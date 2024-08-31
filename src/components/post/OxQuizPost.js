import React from 'react';
import styled from 'styled-components';
import menuIcon from '../../assets/post/menuIcon.svg';
import OIcon from '../../assets/post/OIcon.svg';
import XIcon from '../../assets/post/XIcon.svg';
// import activeHeart from '../../assets/post/activeHeart.svg';
import deActiveHeart from '../../assets/post/deActiveHeart.svg';
import repostIcon from '../../assets/post/repostIcon.svg';
import shareIcon from '../../assets/post/shareIcon.svg';

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
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const QuizArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px 75px;
  background-color: #eaeaea;
  border-radius: 20px;
  gap: 30px;
`;

const OXArea = styled.div`
  display: flex;
  gap: 70px;
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

export default function OxQuizPost() {
  // Icon 설정을 위한 배열
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
      src: shareIcon,
      action: 'share',
      size: '26px',
    },
  ];

  return (
    <Container>
      <UserArea>
        <UserImage />
        <TextArea>
          <Text>sxxnoudxx</Text>
          <TimeText>2시간</TimeText>
        </TextArea>
        <IconImage src={menuIcon} size="24px" alt="menu icon" />
      </UserArea>
      <ContentArea>
        <QuizArea>
          <Text>Q. 비행기 탈 때 맨발로 타야하나요?</Text>
          <OXArea>
            <IconImage src={OIcon} size="70px" alt="O icon" />
            <IconImage src={XIcon} size="70px" alt="X icon" />
          </OXArea>
        </QuizArea>
        <IconArea>
          {icons.map(({ src, action, size }) => {
            return (
              <div key={action}>
                <IconImage src={src} size={size} />
              </div>
            );
          })}
        </IconArea>
      </ContentArea>
    </Container>
  );
}
