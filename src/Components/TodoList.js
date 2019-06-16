import React from 'react';
import styled from '@emotion/styled';
import TodoItem from './TodoItem';

const ItemList = styled.ul`
  margin: 0;
  padding: 0;
  text-align: left;
  list-style: none;
`;

const Todo = ({ todos }) =>
  todos.map((todo, i) => (
    <TodoItem
      key={i}
      text={todo.text}
      completed={todo.completed}
      itemId={i}
      editMode={todo.editMode}
      createdAt={todo.createdAt}
      completedAt={todo.completedAt}
    />
  ));

const Todos = ({ todos, filter, availableFilters }) => {
  if (filter === availableFilters[0]) {
    // all
    return <Todo todos={todos} />;
  } else if (filter === availableFilters[1]) {
    // completed
    const completedTodos = todos.filter(item => item.completed);
    return <Todo todos={completedTodos} />;
  } else if (filter === availableFilters[2]) {
    // incompleted
    const incompletedTodos = todos.filter(item => !item.completed);
    return <Todo todos={incompletedTodos} />;
  }
};

const TodoList = ({ todos, filter, availableFilters }) => {
  return (
    <ItemList>
      <Todos
        todos={todos}
        filter={filter}
        availableFilters={availableFilters}
      />
    </ItemList>
  );
};

export default TodoList;
