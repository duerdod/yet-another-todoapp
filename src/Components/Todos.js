import React, { useState, createContext } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import Button from './styled/Button';

export const TodoContext = createContext();

const Todos = () => {
  const [todos, setTodo] = useState([]);

  const addTodo = text =>
    setTodo([
      ...todos,
      { text, completed: false, editMode: false, textTo: '' }
    ]);

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
        todos={{
          todos
        }}
      >
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleCompleted={toggleCompleted}
          toggleEditMode={toggleEditMode}
          deleteItem={deleteItem}
          editTextTo={editTextTo}
        />
        <Button onClick={toggleAll} disabled={todos.length < 1}>
          🏁
        </Button>
        <Button onClick={deleteAll} disabled={todos.length < 1}>
          🗑
        </Button>
      </TodoContext.Provider>
    </div>
  );
};

export default Todos;

// ␥ = dele
