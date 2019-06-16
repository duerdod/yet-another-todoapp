import React, { useState, createContext, useEffect } from 'react';
import TodoInput from './TodoInput';
import FilterButtons from './FilterButtons';
import TodoList from './TodoList';
import MainButtons from './MainButtons';
import ProgressBar from './ProgressBar';
import { getDate } from '../utils';

export const TodoContext = createContext();

const availableFilters = ['all', 'completed', 'incompleted'];

const Todos = () => {
  const [todos, setTodo] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );
  const [filter, setFilter] = useState(availableFilters[0]);

  useEffect(() => localStorage.setItem('todos', JSON.stringify(todos)), [
    todos
  ]);

  const addTodo = text => {
    setTodo([
      ...todos,
      {
        text,
        completed: false,
        editMode: false,
        textTo: '',
        createdAt: getDate(),
        completedAt: ''
      }
    ]);
  };

  const toggleCompleted = index => {
    todos[index].completed = !todos[index].completed;
    if (!todos[index].completedAt) {
      todos[index].completedAt = getDate();
    } else {
      todos[index].completedAt = '';
    }
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
    const deletedTodos = [...todos];
    deletedTodos.splice(0);
    setTodo([...deletedTodos]);
  };

  const showAll = () => {
    setFilter(availableFilters[0]);
  };

  const showCompleted = () => {
    setFilter(availableFilters[1]);
  };

  const showNotCompleted = () => {
    setFilter(availableFilters[2]);
  };

  const buttonDisabled = todos.length < 1;
  return (
    <div>
      <TodoContext.Provider
        value={{
          todos,
          toggleCompleted,
          toggleEditMode,
          deleteItem,
          editTextTo,
          toggleAll,
          deleteAll,
          showAll,
          showCompleted,
          showNotCompleted,
          availableFilters,
          buttonDisabled
        }}
      >
        <TodoInput addTodo={addTodo} />
        <FilterButtons buttonDisabled={buttonDisabled} />
        <TodoList
          todos={todos}
          availableFilters={availableFilters}
          filter={filter}
        />
        <ProgressBar todos={todos} />
        <MainButtons buttonDisabled={buttonDisabled} />
      </TodoContext.Provider>
    </div>
  );
};

export default Todos;

// ␥ = dele i emojis, its a hot dog!!!!
