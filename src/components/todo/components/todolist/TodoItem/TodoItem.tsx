import React, { useContext } from 'react'
import { withRouter } from 'react-router';
import TodoContext from '../../../../../app/todo/context';
import { StoreType, TodoItemProps } from '../../../../../interfaces';
import './TodoItem.css';

function TodoItem(props: TodoItemProps) {
  const { setViewTodo } = useContext<StoreType>(TodoContext);
  return (
    <div className="todo-item" key={props.id} role="link" aria-label="click to edit selected todo" onClick={() => {
      setViewTodo({
        title: props.title,
        id: props.id,
        description: props.description,
        isCompleted: props.isCompleted,
      })
      props.history.push(`/edit/${props.id}`);
    }}>
      <div className="todo-item-details">
        <h4 className="todo-item-title">
          {props.title}
        </h4>
        <p>
          {props.description}
        </p>
      </div>
      <div className="todo-item-toggler">
        <span className={`toggler ${props.isCompleted === 'true' ? 'active': ''}`}>
          <span className="thin-bar"></span>
          <span className="circle"></span>
        </span>
      </div>
    </div>
  )
}

export default withRouter(TodoItem)