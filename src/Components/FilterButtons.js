import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { TodoContext } from './Todos';
import Button from './styled/Button';

const FilterContainer = styled.div`
  text-align: center;
  margin: 0.5rem 0;
`;

const TextButton = styled(Button)`
  font-size: 0.65rem;
`;

const FilterButtons = ({ buttonDisabled }) => {
  const { showAll, showCompleted, showNotCompleted } = useContext(TodoContext);
  return (
    <FilterContainer>
      <TextButton onClick={showAll} disabled={buttonDisabled}>
        all
      </TextButton>
      <TextButton onClick={showCompleted} disabled={buttonDisabled}>
        completed
      </TextButton>
      <TextButton onClick={showNotCompleted} disabled={buttonDisabled}>
        incompleted
      </TextButton>
    </FilterContainer>
  );
};

export default FilterButtons;
