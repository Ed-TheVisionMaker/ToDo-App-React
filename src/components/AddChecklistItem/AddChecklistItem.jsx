import React from "react";
import styled from "styled-components";

const AddToChecklist = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  margin: 0 auto;

  padding: 5px 10px;

  &:disabled {
    cursor: not-allowed;
  }
`;

const AddChecklistItem = (props) => {
  const { handleDisableAddCheckItem, item, newItem } = props;
  return (
    <AddToChecklist
      disabled={newItem}
      onClick={() =>
        props.handleChecklistNewItem(item, handleDisableAddCheckItem)
      }
    >
      Add item
    </AddToChecklist>
  );
};

export default AddChecklistItem;
