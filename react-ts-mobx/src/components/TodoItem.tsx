import React from 'react';
import classNames from 'classnames';
import './Todo.css';

interface Props {
  key: any,
  todo: any,
  index: number,
  checkTodo: (todo: any, index: number, event: any) => void,
  doneEdit: (todo: any, index: number, event: any) => void,
  cancelEdit: (todo: any, index: number, event: any) => void,
  deleteTodo: (index: number) => void,
  editTodo: (todo: any, index: number, event: any) => void
};

const TodoItem = ({key, todo, index, checkTodo, doneEdit, cancelEdit, deleteTodo, editTodo}: Props) => {
  return (
    <div key={key} className="todo-item">
      <div className="todo-item-left">
        <input type="checkbox" onChange={(event) => checkTodo(todo, index, event)} checked={todo.completed} />
        {!todo.editing &&
        <div
          className={classNames({'todo-item-label': true, 'completed': todo.completed})}
          onDoubleClick={(event) => editTodo(todo, index, event)}
        >
          {todo.title}
        </div>
        }

        {todo.editing &&
        <input
          className="todo-item-edit" type="text" autoFocus
          defaultValue={todo.title}
          onBlur={(event) => doneEdit(todo, index, event)}
          onKeyUp={(event) => {
            if (event.key === 'Enter') {
              doneEdit(todo, index, event);
            } else if (event.key === 'Escape') {
              cancelEdit(todo, index, event);
            }
          }}
        />
        }

      </div>
      <div className="remove-item" onClick={(event) => deleteTodo(index)}>
        &times;
      </div>
    </div>
  );
};

export default TodoItem;