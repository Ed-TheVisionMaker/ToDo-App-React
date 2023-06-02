import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  width: 200px;

  padding: 5px 10px;
  font-size: 18px;
`;

const ClearButton = styled.button`
  padding: 5px;
`;



const SearchItems = (props) => {
    return (
    <SearchContainer>
        {/* <SearchInput onChange={(e) => props.handleSearchValue(e)} placeholder={"search list"} /> */}
        {/* <ClearButton onClick={() => props.handleClear()}>Clear</ClearButton> */}
      </SearchContainer>
    );
};

export default SearchItems;
