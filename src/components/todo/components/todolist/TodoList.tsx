import React, { useContext } from 'react'
import './TodoList.css';
import TodoItem from './TodoItem/TodoItem'
import TodoContext from '../../../../app/todo/context';
import { useObserver } from 'mobx-react-lite';

export default function TodoList() {
  const { todos } = useContext(TodoContext);
  return useObserver(() => (
    <div className="todo-list">
      <div className="site-title">
        <h1>
          Todo Application
        </h1>
      </div>
      <div className="list-items">
        {
          todos.length ? (
            todos.map((todo: {title: string, description: string, isCompleted: string, id: string}) => (
              (
                <TodoItem {
                  ...{
                    title: todo.title,
                    description: todo.description,
                    id: todo.id,
                    isCompleted: todo.isCompleted,
                    key: todo.id,
                  }

                } />
              )
            ))
          ) : (
            <h3 className="text-center">
              Nothing to show. Please add a todo.
            </h3>
          )
        }
      </div>
    </div>
  ))
}
