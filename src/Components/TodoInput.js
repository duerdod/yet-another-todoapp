import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Form, InputTextField } from './styled/Forms';
import Button from './styled/Button';
import { Add } from './styled/Icons';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;

const StyledButton = styled(Button)`
  font-size: 2rem;
  margin-left: 0;
`;

const ErrorMessage = styled.p`
  color: rgb(193, 81, 111);
  margin: 3px;
  font-size: 0.65rem;
  position: absolute;
  bottom: -5px;
  left: 3px;
`;

const Error = ({ message }) => <ErrorMessage>{message}</ErrorMessage>;

const TodoInput = ({ addTodo }) => {
  const [todoText, handleChange] = useState('');
  const [error, isError] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (todoText.length >= 2 && isError) {
      isError(false);
    }
  }, [todoText]);

  return (
    <StyledForm
      onSubmit={e => {
        e.preventDefault();
        if (!todoText) {
          isError(true);
          setMessage('Du måste ju skriva nå');
          return;
        } else if (todoText.length <= 1) {
          isError(true);
          setMessage('Mer än ett tecken, är du snäll');
          return;
        }
        isError(false);
        addTodo(todoText);
        handleChange('');
      }}
    >
      <InputTextField
        type="text"
        name="todo"
        placeholder="what a you suppose to deuce?"
        onChange={e => handleChange(e.target.value)}
        value={todoText}
      />
      <StyledButton>
        <Add />
      </StyledButton>
      {error ? <Error message={message} /> : null}
    </StyledForm>
  );
};

export default TodoInput;
