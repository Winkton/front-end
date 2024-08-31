import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ActiveSearch } from '../../assets/header/activeSearch.svg';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #ffffff;
  border-bottom: 1px solid #d9d9d9;
`;

const SearchInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  gap: 10px;
  background-color: #fafafa;
  border: 1px solid #cccccc;
  margin-left: 35px;
  margin-right: 35px;
  padding: 13px 25px;
`;

const SearchIcon = styled(ActiveSearch)`
  color: #cccccc;
`;

const InputBox = styled.input`
  all: unset;
  flex: 1;
  font-size: 20px;
  border-radius: 5px;
  padding-left: 10px;
`;

function SearchInput() {
  return (
    <SearchContainer>
      <SearchInputBox>
        <SearchIcon />
        <InputBox placeholder="검색" />
      </SearchInputBox>
    </SearchContainer>
  );
}

export default SearchInput;
