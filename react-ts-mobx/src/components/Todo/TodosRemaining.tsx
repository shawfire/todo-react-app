import React from 'react';

interface Props {
  remaining: number
}

const TodosRemaining = ({remaining}: Props) => {
  return (
    <div>
      {remaining} items left
    </div>
  );
};

export default TodosRemaining;