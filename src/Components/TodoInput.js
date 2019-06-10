import React, { useState, useContext } from 'react';
import styled from '@emotion/styled';
import { Form, InputTextField } from './styled/Forms';

const TodoInput = ({ addTodo }) => {
  const [todoText, handleChange] = useState('');

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (!todoText) return;
        addTodo(todoText);
        handleChange('');
      }}
    >
      <InputTextField
        type="text"
        name="todo"
        placeholder="SKRIIV"
        onChange={e => handleChange(e.target.value)}
        value={todoText}
      />
    </Form>
  );
};

export default TodoInput;
