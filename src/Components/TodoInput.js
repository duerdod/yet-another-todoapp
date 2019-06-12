import React, { useState, useContext } from 'react';
import styled from '@emotion/styled';
import { Form, InputTextField } from './styled/Forms';
import Button from './styled/Button';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledButton = styled(Button)`
  font-size: 1rem;
`;

const TodoInput = ({ addTodo }) => {
  const [todoText, handleChange] = useState('');

  return (
    <StyledForm
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
        placeholder="Vad ska du göra?"
        onChange={e => handleChange(e.target.value)}
        value={todoText}
      />
      <StyledButton>Add</StyledButton>
    </StyledForm>
  );
};

export default TodoInput;
