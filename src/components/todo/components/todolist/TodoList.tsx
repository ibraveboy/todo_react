import React from 'react'
import './TodoList.css';
import TodoItem from './TodoItem/TodoItem'

export default function TodoList() {
  return (
    <div className="todo-list">
      <div className="site-title">
        <h1>
          Todo Application
        </h1>
      </div>
      <div className="list-items">
        <TodoItem {
          ...{
            title: 'Tomorrow Walk',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quasi ad exercitationem vero explicabo, natus ipsam harum autem saepe ratione molestias totam voluptatem quaerat esse! Necessitatibus culpa eligendi blanditiis est.',
            isCompleted: false,
            id: 0,
          }
        } />
        <TodoItem {
          ...{
            title: 'Tomorrow Walk',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quasi ad exercitationem vero explicabo, natus ipsam harum autem saepe ratione molestias totam voluptatem quaerat esse! Necessitatibus culpa eligendi blanditiis est.',
            isCompleted: false,
            id: 1,
          }
        } />
        <TodoItem {
          ...{
            title: 'Tomorrow Walk',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quasi ad exercitationem vero explicabo, natus ipsam harum autem saepe ratione molestias totam voluptatem quaerat esse! Necessitatibus culpa eligendi blanditiis est.',
            isCompleted: false,
            id: 2,
          }
        } />
        <TodoItem {
          ...{
            title: 'Tomorrow Walk',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quasi ad exercitationem vero explicabo, natus ipsam harum autem saepe ratione molestias totam voluptatem quaerat esse! Necessitatibus culpa eligendi blanditiis est.',
            isCompleted: false,
            id: 3,
          }
        } />
      </div>
    </div>
  )
}
