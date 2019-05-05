import React from 'react';

interface Props {
  clearCompleted: () => void
}

const TodosClearCompleted = ({clearCompleted}: Props) => {
  return (
    <button onClick={clearCompleted}>Clear Completed</button>
  );
};

export default TodosClearCompleted;