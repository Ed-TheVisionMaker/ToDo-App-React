import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 200px;

  margin-left: 30px;
  padding: 5px 10px;
  font-size: 18px;
`;

const ClearButton = styled.button`
  height: 30px;
  margin-left: 10px;
  padding: 5px;
`;



const SearchItems = (props) => {
    return (
    <SearchContainer>
        <SearchInput onChange={(e) => props.handleSearch(e)} placeholder={"search list"} value={props.searchValue} />
        <ClearButton onClick={() => props.handleClear()}>Clear</ClearButton>
      </SearchContainer>
    );
};

export default SearchItems;
