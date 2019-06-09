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
  font-size: 3rem;

  &:before {
    content: '⬜️';
  }

  input:checked + &:before {
    content: '🙏🏼';
  }
`;

const Checkbox = styled.input`
  display: none;
  font-size: 1em;
`;

const ItemText = styled.span`
  padding: 2rem;
  margin-right: 2rem;
  font-size: 2rem;
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
  toggleEditMode,
  editTextTo
}) => {
  return (
    <Item>
      {!editMode ? (
        <>
          <Checkbox
            type="checkbox"
            defaultChecked={completed}
            id={`item-${itemId}`}
            onChange={e => toggleCompleted(itemId)}
          />
          <ItemLabel htmlFor={`item-${itemId}`}>
            <ItemText>{text}</ItemText>
          </ItemLabel>
          <Button onClick={e => toggleEditMode(itemId)} disabled={completed}>
            ✏️
          </Button>
          <Button onClick={e => deleteItem(e.target.dataset.itemIndex)} itemId>
            🗑
          </Button>
        </>
      ) : (
        <EditItem text={text} editTextTo={editTextTo} itemId={itemId} />
      )}
    </Item>
  );
};

export default TodoItem;
