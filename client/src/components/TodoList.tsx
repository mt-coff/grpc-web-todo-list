import React from 'react';

interface IProps {
  todoList: any;
  getTodos: any;
}

export default class TodoList extends React.Component<IProps> {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <ul>
        {this.props.todoList.map((todo: any) => {
          return (
            <li key={todo.id}>
              <div>{todo.title}</div>
              <div>{todo.detail}</div>
            </li>
          );
        })}
      </ul>
    );
  }
}
