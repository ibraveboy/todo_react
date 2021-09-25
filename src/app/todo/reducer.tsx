import { ADD_NEW_TODO } from "./actions"

const initialState = {
  todos: [],
  selectedTodo: {},
}

export const todoReducer = (state = initialState, action:{ type:string, payload:any }) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload,
        ],
      }
    default:
      return {
        ...state,
      }
  }
}