import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Todo from './components/todo/Todo';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Todo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
