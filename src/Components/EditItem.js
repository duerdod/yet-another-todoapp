import React from 'react';
import styled from '@emotion/styled';
import { Form, InputTextField } from './styled/Forms';
import Button from './styled/Button';

const EditLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const EditItem = ({ text }) => {
  return (
    <EditLabel>
      <InputTextField placeholder={text} />
      <Button>💾</Button>
    </EditLabel>
  );
};

export default EditItem;
