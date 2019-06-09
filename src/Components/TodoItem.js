import React from 'react';
import styled from '@emotion/styled';

const Item = styled.li`
  padding: 0.8rem 0.1rem;
  font-weight: 100;
  display: flex;
`;

const ItemLabel = styled.label`
  flex: 1;
  cursor: pointer;

  /* &:before {
    content: '⬜️';
    font-size: 2rem;
  }
  
  content: '🙏🏼';
  font-size: 2rem;
} */
`;

const Checkbox = styled.input`
  /* display: none; */
`;

const ItemText = styled.span`
  padding: 2rem;
  margin-right: 2rem;
  font-size: 1.2rem;
`;

const TodoItem = ({ text, completed, itemId, toggleCompleted, deleteItem }) => {
  return (
    <Item>
      <ItemLabel labelFor="item">
        <Checkbox
          type="checkbox"
          defaultChecked={completed}
          name="item"
          onChange={e => toggleCompleted(e.target.dataset.itemIndex)}
          data-item-index={itemId}
        />
        <ItemText>{text}</ItemText>
        <button
          onClick={e => deleteItem(e.target.dataset.itemIndex)}
          data-item-index={itemId}
        >
          delete
        </button>
      </ItemLabel>
    </Item>
  );
};

export default TodoItem;
