import React from 'react';

const ProgressBar = ({ todos }) => {
  const calcBarLength = todos => {
    let barLength = 0;
    if (todos.length == 0) return;
    let totalCompleted = 0;
    todos.forEach(item => (item.completed ? totalCompleted++ : null));
    let barLength = parseFloat(totalCompleted / todos.length);
    return barLength.toString();
  };

  return (
    <div>
      <span>{calcBarLength(todos)} done</span>
    </div>
  );
};

export default ProgressBar;
