import React from 'react';
import styled from '@emotion/styled';
import Button from './styled/Button';
import EditItem from './EditItem';

const Item = styled.li`
  padding: 0.8rem 0.1rem;
  font-weight: 100;
  display: flex;
`;

const ItemLabel = styled.label`
  flex: 1;
  cursor: pointer;

  &:before {
    content: '⬜️';
    font-size: 2rem;
  }

  input:checked + &:before {
    content: '🙏🏼';
    font-size: 2rem;
  }
`;

const Checkbox = styled.input`
  display: none;
  font-size: 1em;
`;

const ItemText = styled.span`
  padding: 2rem;
  margin-right: 2rem;
  font-size: 1.2rem;
  font-family: 'Arial Black';
  color: rgba(17, 145, 207, 1);
  padding-bottom: 8px;
`;

const TodoItem = ({
  text,
  completed,
  itemId,
  toggleCompleted,
  deleteItem,
  editMode,
  toggleEditMode
}) => {
  return (
    <Item>
      {!editMode ? (
        <>
          <Checkbox
            type="checkbox"
            defaultChecked={completed}
            id={`item-${itemId}`}
            onChange={e => toggleCompleted(e.target.dataset.itemIndex)}
            data-item-index={itemId}
          />
          <ItemLabel htmlFor={`item-${itemId}`}>
            <ItemText>{text}</ItemText>
          </ItemLabel>
          <Button
            onClick={e => toggleEditMode(e.target.dataset.itemIndex)}
            data-item-index={itemId}
          >
            ✏️
          </Button>
          <Button
            onClick={e => deleteItem(e.target.dataset.itemIndex)}
            data-item-index={itemId}
          >
            🗑
          </Button>
        </>
      ) : (
        <EditItem text={text} />
      )}
    </Item>
  );
};

export default TodoItem;
