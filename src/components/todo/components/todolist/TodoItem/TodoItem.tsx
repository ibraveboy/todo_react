import React, { useState } from 'react'
import './TodoItem.css';

export default function TodoItem(props: { title: string, description: string, id: number, isCompleted:boolean }) {
  const [isActive, setIsActive] = useState('');
  return (
    <div className="todo-item">
      <div className="todo-item-details">
        <h4 className="todo-item-title">
          New Item
        </h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ab laboriosam minus non dolor nostrum quidem sunt voluptatum, et quaerat doloribus excepturi eos quasi, reprehenderit nesciunt molestias architecto optio illum.
        </p>
      </div>
      <div className="todo-item-toggler">
        <span className={`toggler ${isActive}`} onClick={(e) => {
          if (isActive) {
            setIsActive('');
          } else {
            setIsActive('active');
          }
        }}>
          <span className="thin-bar"></span>
          <span className="circle"></span>
        </span>
      </div>
    </div>
  )
}
