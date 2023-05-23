import React from "react";
import Dropdown from 'react-dropdown';
import styled from "styled-components";

// https://blog.logrocket.com/customize-reusable-react-dropdown-menu-component/
// follow these instructions

const DropdownWrapperStyled = styled.div`

`

const DropdownHeaderStyled = styled.div`

`

const DropdownHeaderTitleStyled = styled.div`

`

const DropdownListStyled= styled.div`

`

const DropdownListButton = styled.button`

`



export default class Dropdown extends React.Component {
    state = {
        isListOpen: false,
        headerTitle: "",
    }

    toggleList = () => {
        this.setState(prevState => ({
          isListOpen: !prevState.isListOpen
       }))
     }
    render() {
        return (
            <DropdownWrapperStyled>
                <DropdownHeaderStyled>
                    <dDropdownHeaderTitleStyle>header title</dDropdownHeaderTitleStyle>
                </DropdownHeaderStyled>
                <DropdownListStyled>
                    <DropdownListButton>0</DropdownListButton>
                    <DropdownListButton>1</DropdownListButton>
                </DropdownListStyled>
            </DropdownWrapperStyled>

        )
    }
}
