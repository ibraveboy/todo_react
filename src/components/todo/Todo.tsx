import React, { Component } from 'react'
import './Todo.css';
import TodoList from './components/todolist/TodoList'
import AddNewTodoButton from './components/addnewtodobutton/AddNewTodoButton';

export default class Todo extends Component {
  render() {
    return (
      <div className="todo-container">
        <TodoList />
        <AddNewTodoButton />
      </div>
    )
  }
}
