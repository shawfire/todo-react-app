
import React from 'react';
import classNames from 'classnames';
import './Todo.css';

interface Props {
  updateFilter: (filter: string) => void,
  filter: string
}

const TodosFiltered = ({updateFilter, filter}: Props) => {
  return (<div>
    <button
      onClick={() => updateFilter('all')}
      className={classNames({'active': filter === 'all'})}
    >
      All
    </button>

    <button
      onClick={() => updateFilter('active')}
      className={classNames({ 'active': filter === 'active' })}
    >
      Active
    </button>

    <button
      onClick={() => updateFilter('completed')}
      className={classNames({ 'active': filter === 'completed' })}
    >
      Completed
    </button>
  </div>
  );
};

export default TodosFiltered;


