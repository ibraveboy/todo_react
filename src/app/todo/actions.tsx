export const ADD_NEW_TODO = 'todo/addNewTodo';

export const addNewTodo = (payload:{ title:string, description:string, id:number, date:string, isCompleted:boolean }) => {
  return {
    type: ADD_NEW_TODO,
    payload,
  }
}