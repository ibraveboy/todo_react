import { useLocalStore } from 'mobx-react';

const useStore = () => {
  const store = useLocalStore(() => ({
    todos: [],
    viewTodo: {},
    setViewTodo: (todo) => {
      store.viewTodo = {...todo};
    },
    clearViewTodo: () => {
      store.viewTodo = {};
    },
    createTodo: (todo) => {
      store.todos.push(todo);
    },
    removeTodo: (id) => {
      let index = store.todos.findIndex(todo => todo.id === id);
      store.todos.splice(index, 1);
    },
    updateTodo: (updatedTodo) => {
      let index = store.todos.findIndex(todo => todo.id === updatedTodo.id);
      store.todos.splice(index, 1, updatedTodo);
    }
  }));
  return store;
}

export default useStore;