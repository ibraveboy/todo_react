import React, { Component } from 'react'
import './Todo.css';
import AddNewTodoButton from './components/addnewtodobutton/AddNewTodoButton';
import { Route, Switch } from 'react-router';
import CreateTodo from './components/create/CreateTodo';
import EditTodo from './components/edit/EditTodo';

export default class Todo extends Component {
  render() {
    return(
      <React.Fragment>
        <Switch>
          <Route exact={true} path="/" component={CreateTodo} />
          <Route path="/edit/:id" component={EditTodo} />
        </Switch>
        <AddNewTodoButton />
      </React.Fragment>
    );
  }
}
