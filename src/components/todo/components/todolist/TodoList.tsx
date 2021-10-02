import React, { useContext } from 'react'
import './TodoList.css';
import TodoItem from './TodoItem/TodoItem'
import TodoContext from '../../../../app/todo/context';
import { useObserver } from 'mobx-react-lite';
import { StoreType, TodoType } from '../../../../interfaces';

export default function TodoList() {
  const { todos } = useContext<StoreType>(TodoContext);
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
            todos.map((todo: TodoType) => (
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
