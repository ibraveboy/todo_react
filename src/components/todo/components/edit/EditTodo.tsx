import React, { useContext } from 'react';
import EditTodoForm from '../TodoForm';
import '../create/CreateTodo.css';
import TodoContext from '../../../../app/todo/context';
import { useObserver } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';
import { StoreType, TodoType } from '../../../../interfaces';

export default function EditTodo({ history }: RouteComponentProps) {
  const { viewTodo } = useContext<StoreType>(TodoContext);

  if (!Object.keys(viewTodo).length) {
    history.push('/')
  }
  return useObserver(() => (
    <div className="create-todo text-center">
      <div className="create-todo-content">
        <h1>
          Edit Todo Item
        </h1>
        <p>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
        </p>
        <EditTodoForm
          {
            ...{
              todo: {...viewTodo as TodoType},
              editMode: true
            }
          }
        />
      </div>
    </div>
  ))
}
