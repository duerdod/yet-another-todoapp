import React, { useState, createContext, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import ProgressBar from './ProgressBar';
import Button from './styled/Button';
import { Trash, CheckAll } from './styled/Icons';

export const TodoContext = createContext();

const Todos = () => {
  const [todos, setTodo] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => localStorage.setItem('todos', JSON.stringify(todos)), [
    todos
  ]);

  const addTodo = text => {
    setTodo([
      ...todos,
      { text, completed: false, editMode: false, textTo: '' }
    ]);
  };

  const toggleCompleted = index => {
    todos[index].completed = !todos[index].completed;
    setTodo([...todos]);
  };

  const deleteItem = index => {
    todos.splice(todos[index], 1);
    setTodo([...todos]);
  };

  const toggleEditMode = index => {
    todos[index].editMode = !todos[index].editMode;
    setTodo([...todos]);
  };

  const editTextTo = (index, newText) => {
    todos[index].text = newText;
    todos[index].editMode = !todos[index].editMode;
    setTodo([...todos]);
  };

  const toggleAll = () => {
    let totalItems = todos.length;
    let completedItems = 0;
    let toggledTodos = [...todos];
    todos.forEach(item => (item.completed ? completedItems++ : null));
    if (completedItems === totalItems) {
      toggledTodos.map(item => (item.completed = false));
    } else {
      toggledTodos.map(item => (item.completed = true));
    }
    setTodo([...toggledTodos]);
  };

  const deleteAll = () => {
    todos.splice(0);
    setTodo([...todos]);
  };

  return (
    <div>
      <TodoContext.Provider
        value={{
          todos,
          toggleCompleted,
          toggleEditMode,
          deleteItem,
          editTextTo
        }}
      >
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} />
        <ProgressBar todos={todos} />
        <Button onClick={toggleAll} disabled={todos.length < 1}>
          <CheckAll />
        </Button>
        <Button onClick={deleteAll} disabled={todos.length < 1}>
          <Trash />
        </Button>
      </TodoContext.Provider>
    </div>
  );
};

export default Todos;

// ␥ = dele
