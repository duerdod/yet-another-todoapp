import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = () => {
  const [todos, setTodo] = useState([]);

  const addTodos = text => setTodo([...todos, { text, completed: false }]);

  const toggleCompleted = index => {
    todos[index].completed = !todos[index].completed;
    setTodo([...todos]);
  };

  const deleteItem = index => {
    todos.splice(todos[index], 1);
    setTodo([...todos]);
  };

  return (
    <div>
      <TodoInput addTodos={addTodos} />
      <TodoList
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default Todos;
