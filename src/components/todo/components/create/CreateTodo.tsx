import React from 'react'
import CreateTodoForm from '../TodoForm'
import './CreateTodo.css'

export default function CreateTodo() {
  return (
    <div className="create-todo text-center">
      <div className="create-todo-content">
        <h1>
          Create New Todo Item
        </h1>
        <p>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
        </p>
        <CreateTodoForm {
          ...{
            todo: {},
            editMode: false
          }
        } />
      </div>
    </div>
  )
}
