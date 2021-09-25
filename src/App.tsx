import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import useStore from './app/store/store';
import TodoContext from './app/todo/context';
import Layout from './components/layout/Layout';
import TodoList from './components/todo/components/todolist/TodoList';
import Todo from './components/todo/Todo';

function App() {
  const store = useStore();

  return (
    <TodoContext.Provider value={store}>
      <Router>
        <Layout SidebarComponent={TodoList}>
          <Switch>
            <Route path={['/', '/edit']}>
              <Todo />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </TodoContext.Provider>
  );
}

export default App;
