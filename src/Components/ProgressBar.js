import React from 'react';
import styled from '@emotion/styled';

const BarWrapper = styled.div`
  height: 12px;
  padding: 4px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  margin: 3rem 0 2rem 0;
`;

const Indicator = styled.span`
  position: absolute;
  top: -22px;
  right: -15px;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.primary};
`;

const Bar = styled.div`
  width: ${p => p.width};
  height: 100%;
  background: ${({ theme }) => theme.primary};
  transition: all 1s ease;
  border-radius: 11px;
  position: relative;
`;

const ProgressBar = ({ todos }) => {
  const calcBarLength = todos => {
    let barLength = todos.length;
    if (barLength === 0) return barLength;
    let totalCompleted = 0;
    todos.forEach(item => (item.completed ? totalCompleted++ : null));
    barLength = (totalCompleted / todos.length) * 100;
    return parseInt(barLength);
  };

  return (
    <BarWrapper>
      <Bar width={`${calcBarLength(todos)}%`}>
        <Indicator>{`${calcBarLength(todos).toString()}%`}</Indicator>
      </Bar>
    </BarWrapper>
  );
};

export default ProgressBar;
