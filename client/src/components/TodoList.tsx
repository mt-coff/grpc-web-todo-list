import React from 'react';
import styled from 'styled-components';

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
      <Ul>
        {this.props.todoList.map((todo: any) => {
          return (
            <Li key={todo.id}>
              <Div>{todo.title}</Div>
              <Div>{todo.detail}</Div>
            </Li>
          );
        })}
      </Ul>
    );
  }
}

const Ul = styled.ul`
  padding: 0;
  width: 500px;
`;

const Li = styled.li`
  list-style: none;
  display: flex;
`;

const Div = styled.div`
  padding: 0 1rem;
  margin: 0.5rem 0;
  width: 200px;
  border: solid 1px #242424;
`;
