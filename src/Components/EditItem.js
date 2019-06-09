import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Form, InputTextField } from './styled/Forms';
import Button from './styled/Button';

const EditLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const EditItem = ({ text, itemId, editTextTo }) => {
  const [textTo, handleChange] = useState(text);
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        editTextTo(itemId, textTo);
      }}
    >
      <EditLabel>
        <InputTextField
          type="text"
          defaultValue={text}
          placeholder={text}
          onChange={e => handleChange(e.target.value)}
        />
        <Button onClick={() => editTextTo(itemId, textTo)}>💾</Button>
      </EditLabel>
    </Form>
  );
};

export default EditItem;
