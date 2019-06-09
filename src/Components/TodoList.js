import React, { useState } from 'react';
import styled from '@emotion/styled';
import TodoItem from './TodoItem';

const ItemList = styled.ul`
  margin: 0;
  padding: 0;
  text-align: left;
  list-style: none;
`;

const TodoList = ({ todos, toggleCompleted, deleteItem, toggleEditMode }) => {
  return (
    <ItemList>
      {todos.map((todo, i) => (
        <TodoItem
          key={i}
          text={todo.text}
          completed={todo.completed}
          itemId={i}
          toggleCompleted={toggleCompleted}
          deleteItem={deleteItem}
          editMode={todo.editMode}
          toggleEditMode={toggleEditMode}
        />
      ))}
    </ItemList>
  );
};

export default TodoList;
