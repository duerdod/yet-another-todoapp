import React, { useContext } from 'react';
import styled from '@emotion/styled';
import Button from './styled/Button';
import EditItem from './EditItem';
import { TodoContext } from './Todos';

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
    content: '⬜️ ';
  }

  input:checked + &:before {
    content: '🙏🏼 ';
  }
`;

const Checkbox = styled.input`
  display: none;
  font-size: 1em;
`;

const ItemText = styled.span`
  padding: 2rem;
  margin-right: 2rem;
  font-size: 1.5rem;
  font-family: 'Source Sans Pro';
  color: rgba(17, 145, 207, 1);
  padding-bottom: 8px;
`;

const TodoItem = ({ text, completed, itemId, editMode }) => {
  const {
    todos,
    toggleCompleted,
    toggleEditMode,
    deleteItem,
    editTextTo
  } = useContext(TodoContext);
  console.log(todos);
  return (
    <Item>
      {!editMode ? (
        <>
          <Checkbox
            type="checkbox"
            checked={completed}
            id={`item-${itemId}`}
            onChange={e => toggleCompleted(itemId)}
          />
          <ItemLabel htmlFor={`item-${itemId}`}>
            <ItemText>{text}</ItemText>
          </ItemLabel>
          <Button onClick={e => toggleEditMode(itemId)} disabled={completed}>
            ✏️
          </Button>
          <Button onClick={e => deleteItem(itemId)} itemId>
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
