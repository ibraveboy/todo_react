import { useObserver } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import TodoContext from '../../../app/todo/context';
import useFormState from './useFormState';

export default function TodoForm({ editMode, todo }) {
  const initialValues = editMode ? { ...todo } : {
    title: '',
    description: '',
    isCompleted: 'false'
  };
  const { createTodo, updateTodo } = useContext(TodoContext);
  const onSubmit = (values) => {
    if (editMode) {
      updateTodo({ ...values});
      toast.success('Todo item updated.');
    } else {
      createTodo({...values, id: String(Date.now())});
      setValues(initialValues);
      toast.success('Todo item created.');
    }
  };
  const { values, handleChange, handleSubmit, errors, setValues } = useFormState({
    initialValues,
    onSubmit,
  });

  useEffect(()=> {
    if (todo && todo.id && todo.id !== values.id) {
      setValues(todo);
    }
  }, [todo, values, setValues])

  return useObserver(() => (
    <form className='todo-form' onSubmit={handleSubmit}>
      <div className='input-group'>
        <label for='title'>Set Title</label>
        <input
          id='title'
          name='title'
          type='text'
          value={values.title}
          onChange={handleChange}
        />
        <small className='invalid-msg text-left'>
          {errors && errors.title ? errors.title : ''}
        </small>
      </div>
      <div className='input-group'>
        <label for='description'>Description</label>
        <textarea
          id='description'
          name='description'
          value={values.description}
          onChange={handleChange}
          rows='10'
        ></textarea>
        <small className='invalid-msg text-left'>
          {errors && errors.description ? errors.description : ''}
        </small>
      </div>
      <div className='input-group'>
        <label>Status</label>
        <div className="text-left" onChange={handleChange}>
          <input
            type="radio"
            id="isCompletedTrue"
            name="isCompleted"
            value="true"
            checked={values.isCompleted === 'true'}
          /><label for="isCompletedTrue">Completed</label>
          <input
            type="radio"
            id="isCompletedFalse"
            name="isCompleted"
            value="false"
            checked={values.isCompleted === 'false'}
          /><label for="isCompletedFalse">Not Completed</label>
        </div>
        <small className='invalid-msg text-left'>
          {errors && errors.isCompleted ? errors.isCompleted : ''}
        </small>
      </div>
      <input value={editMode ? 'Edit Item' : 'Save Item'} type='submit' />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </form>
  ));
}
