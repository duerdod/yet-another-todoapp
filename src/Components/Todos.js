import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

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
    let itemsCompleted = 0;
    let totalItems = todos.length;
    let toggledTodos = [...todos];
    todos.forEach(item => (item.completed ? itemsCompleted++ : null));
    if (totalItems === itemsCompleted) {
      toggledTodos.map(item => (item.completed = false));
    } else {
      toggledTodos.map(item => (item.completed = true));
    }
    setTodo([...toggledTodos]);
  };
  console.log(todos);
  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleCompleted={toggleCompleted}
        toggleEditMode={toggleEditMode}
        deleteItem={deleteItem}
        editTextTo={editTextTo}
      />
      <button onClick={toggleAll}>toggleAll</button>
    </div>
  );
};

export default Todos;
