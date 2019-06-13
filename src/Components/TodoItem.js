import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { TodoContext } from './Todos';
import Button from './styled/Button';
import EditItem from './EditItem';

import { Edit, Check, Circle, Close } from './styled/Icons';

const Item = styled.li`
  padding: 1.2rem 0.2rem;
  font-weight: 100;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 0.5rem;

  &:not(:last-child) {
    border-bottom: 1px solid #f4f4f4;
  }
`;

const ItemLabel = styled.label`
  flex: 1;
  cursor: pointer;
  font-size: 1rem;

  /* &:before {
    content: '⬜️ ';
  }

  input:checked + &:before {
    content: '🙏🏼 ';
  } */
`;

const Checkbox = styled.input`
  display: none;
  font-size: 1em;
`;

const ItemText = styled.span`
  margin-left: 1.3rem;
  font-size: 1rem;
  font-family: 'Source Sans Pro';
  color: rgba(0, 0, 0, 0.8);

  ${p => (p.completed ? `text-decoration: line-through;` : null)}
`;

const Created = styled.span`
  position: absolute;
  font-size: 0.65rem;
  color: rgba(0, 0, 0, 0.2);
  bottom: 0;
`;

const TodoItem = ({ text, completed, itemId, editMode, createdAt }) => {
  const {
    toggleCompleted,
    toggleEditMode,
    deleteItem,
    editTextTo
  } = useContext(TodoContext);
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
            {completed ? <Check /> : <Circle />}
            <ItemText completed={completed}>{text}</ItemText>
          </ItemLabel>
          <Created>{createdAt}</Created>
          <Button onClick={e => toggleEditMode(itemId)} disabled={completed}>
            <Edit />
          </Button>
          <Button onClick={e => deleteItem(itemId)} itemId>
            <Close />
          </Button>
        </>
      ) : (
        <EditItem text={text} editTextTo={editTextTo} itemId={itemId} />
      )}
    </Item>
  );
};

export default TodoItem;
