import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router';
import './AddNewTodoButton.css';

function AddNewTodoButton(props: RouteComponentProps<any>) {
  return (
    <div className="add-button" role="link" aria-label="navigate to create todo" onClick={() => props.history.push('/')}>
      <span className="plus-icon">
        +
      </span>
    </div>
  )
}

export default withRouter(AddNewTodoButton);