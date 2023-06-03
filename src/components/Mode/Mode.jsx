import React from "react";
import styled from "styled-components";

const ModeButton = styled.button`
    position: absolute;
    top: 5%;
    right: 10%;

    font-size: 14px;
    padding: 5px;
`

const Mode = ({mode, handleMode}) => {
return  <ModeButton onClick={() => handleMode() } >{mode}</ModeButton>
}

export default Mode;