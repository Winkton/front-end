import React from 'react';
import styled from 'styled-components';
import HashTag from '../../assets/post/HashTag'; // SVG 컴포넌트

const HashTagBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
  color: ${(props) => {
    return props.active ? '#007BFF' : '#868686';
  }}; /* 텍스트 색상 변경 */
  background-color: ${(props) => {
    return props.active ? '#E6F0FF' : 'transparent';
  }}; /* 배경색 변경 */
  border: 1px solid
    ${(props) => {
      return props.active ? '#007BFF' : '#868686';
    }}; /* 테두리 색상 변경 */
  border-radius: 20px;
  gap: 5px;
  cursor: pointer;
`;

export default function PostHashTagButton({ type, active, onClick }) {
  return (
    <HashTagBox active={active} onClick={onClick}>
      <HashTag fill={active ? '#007BFF' : '#868686'} /> {type}
    </HashTagBox>
  );
}
