import React, { useState } from 'react';
import styled from '@emotion/styled';

const Form = styled.form`
  width: 100%;
`;

const InputField = styled.input`
  margin: 1rem auto;
  padding: 0;
  border: 0;
  outline: 0;
  outline: 0;
  border: 2px solid rgba(0, 0, 0, 0.1);
  transition: all 300ms;
  width: 100%;
  background: rgba(255, 255, 255, 0.4);
  padding: 0.8rem 0.4rem;
  font-size: 0.8rem;
`;

const TodoInput = ({ addTodos }) => {
  const [todoText, handleChange] = useState('');
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (!todoText) return false;
        addTodos(todoText);
        handleChange('');
      }}
    >
      <InputField
        type="text"
        name="todo"
        onChange={e => handleChange(e.target.value)}
        value={todoText}
      />
    </Form>
  );
};

export default TodoInput;
