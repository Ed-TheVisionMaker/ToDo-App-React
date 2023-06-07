import React from "react";
import styled from "styled-components";

const DdWrapperStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 0;
`;

const DdHeaderButtonStyled = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid var(--white);
`;

const DdHeaderTitleStyled = styled.div``;

const DdListStyled = styled.div`
  position: absolute;
  top: 36px;
  left: 20px;
  z-index: 1;

  display: flex;
  flex-direction: column;

  border-radius: 10px;

  background-color: #797979;
`;

const DdListButton = styled.button`
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: black;
  background-color: #797979;

  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 5px 8px;

  &:hover {
    background-color: #242424;
    color: var(--white);
    border: 1px solid var(--white);
  }
`;

const DdListSVG = styled.svg`
  width: 20px;
  height: 35px;

  box-sizing: border-box;
`;

const buttonContent = {
  asEntered: "As Entered",
  ascending: (
    <DdListSVG
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
      />
    </DdListSVG>
  ),
  descending: (
    <DdListSVG
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
      />
    </DdListSVG>
  ),
};

export default class SortButton extends React.Component {
  state = {
    isListOpen: false,
  };

  toggleList = () => {
    this.setState((prevState) => ({
      isListOpen: !prevState.isListOpen,
    }));
  };

  componentDidMount() {
    const category = this.props.category;
    this.setState({ category: category });
  }

  render() {
    const isListOpen = this.state.isListOpen;
    const toggleList = this.toggleList;
    const sortCategory = Object.keys(buttonContent);
    const category = this.props.category;

    return (
      <DdWrapperStyled>
        <DdHeaderTitleStyled>
          <DdHeaderButtonStyled onClick={toggleList}>Sort</DdHeaderButtonStyled>
        </DdHeaderTitleStyled>
        {isListOpen && (
          <DdListStyled>
            {Object.values(buttonContent).map((content, i) => {
              return <DdListButton key={sortCategory[i]} onClick={() => this.props.handleSort(sortCategory[i], category, toggleList)} >{content}</DdListButton>;
            })}
          </DdListStyled>
        )}
      </DdWrapperStyled>
    );
  }

  // render() {
  //   const isListOpen = this.state.isListOpen;
  //   const category = this.props.category;
  //   const toggleList = this.toggleList;
  //   return (
  //     <DdWrapperStyled>
  //       <DdHeaderTitleStyled>
  //         <DdHeaderButtonStyled onClick={toggleList}>Sort</DdHeaderButtonStyled>
  //       </DdHeaderTitleStyled>
  //       {isListOpen && (
  //         <DdListStyled>
  //           <DdListButton
  //             onClick={() =>
  //               this.props.handleSort("default", category, toggleList)
  //             }
  //           >
  //             Default
  //           </DdListButton>
  //           <DdListButton
  //             onClick={() =>
  //               this.props.handleSort("ascending", category, toggleList)
  //             }
  //           >
  //             <DdListSVG
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               strokeWidth="1.5"
  //               stroke="currentColor"
  //               className="w-6 h-6"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
  //               />
  //             </DdListSVG>
  //           </DdListButton>
  //           <DdListButton
  //             onClick={() =>
  //               this.props.handleSort("descending", category, toggleList)
  //             }
  //           >
  //             <DdListSVG
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               strokeWidth="1.5"
  //               stroke="currentColor"
  //               className="w-6 h-6"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
  //               />
  //             </DdListSVG>
  //           </DdListButton>
  //         </DdListStyled>
  //       )}
  //     </DdWrapperStyled>
  //   );
  // }
}
