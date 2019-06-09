import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = () => {
  const [todos, setTodo] = useState([]);

  const addTodo = text =>
    setTodo([...todos, { text, completed: false, editMode: false }]);

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

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleCompleted={toggleCompleted}
        toggleEditMode={toggleEditMode}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default Todos;
