import React from "react";
import styled from "styled-components";

const BarContainer = styled.div`
    width 100%;
    height: 5px;
`

const ColouredBar = styled.div`
    height: inherit;

    box-sizing: border-box;
    border-bottom: 5px solid green;
    border-radius: 2px;
    width: ${(props) => props.progress}%;
`


const ProgressBar = (props) => {
    const showBar = props.progress;
    return (
        <BarContainer>
            {/* show bar creates a 0 displaying when progress = 0, unless a condition is added as below */}
            {showBar > 0 && <ColouredBar progress={showBar} ></ColouredBar>}
        </BarContainer>
    )
}

export default ProgressBar;
