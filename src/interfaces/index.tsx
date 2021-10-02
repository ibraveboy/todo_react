import React, { FunctionComponent, ReactChild } from 'react';
import { RouteComponentProps } from 'react-router';

export interface ValidateProps {
  id?: string;
  title?: string;
  description?: string;
  isCompleted?: string;
}

export interface TodoType {
  id: string;
  title: string;
  description: string;
  isCompleted: string;
}

export interface TodoOptionalProps extends ValidateProps {}

export interface StoreType {
  todos: TodoType[];
  viewTodo: TodoOptionalProps | TodoType;
  setViewTodo: (todo: TodoType) => void;
  clearViewTodo: () => void;
  createTodo: (todo: TodoType) => void;
  removeTodo: (id: string) => void;
  updateTodo: (updatedTodo: TodoType) => void;
}

export interface SidebarComponentProps {}

export interface LayoutProps {
  children: ReactChild;
  SidebarComponent: FunctionComponent<SidebarComponentProps>;
}

export type TodoItemProps = RouteComponentProps & TodoType;

export interface TodoFormProps {
  editMode?: boolean,
  todo: TodoOptionalProps | TodoType,
}

export interface UseFormStateProps {
  initialValues: TodoType,
  onSubmit: (values: TodoType) => void,
}