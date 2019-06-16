import React, { useContext } from 'react';
import { TodoContext } from './Todos';
import Button from './styled/Button';
import { Trash, CheckAll } from './styled/Icons';

const MainButtons = ({ buttonDisabled }) => {
  const { toggleAll, deleteAll } = useContext(TodoContext);
  return (
    <>
      <Button onClick={toggleAll} disabled={buttonDisabled}>
        <CheckAll />
      </Button>
      <Button onClick={deleteAll} disabled={buttonDisabled}>
        <Trash />
      </Button>
    </>
  );
};

export default MainButtons;
