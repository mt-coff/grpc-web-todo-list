import { TodoListServiceClient } from '../pb/TodoServiceClientPb';
import { AddTodoRequest, Todo } from '../pb/todo_pb';

const client = new TodoListServiceClient('http://localhost:8080', {}, {});

export const REQUEST_ADD_TODO = 'REQUEST_ADD_TODO';
export const requestAddTodo = () => ({
  type: 'REQUEST_ADD_TODO'
});

export const RECEIVE_ADD_TODO = 'RECEIVE_ADD_TODO';
export const receiveAddTodo = (todo: Todo.AsObject) => ({
  type: 'RECEIVE_ADD_TODO',
  todo
});

export const addTodo = () => (dispatch: any) => {
  dispatch(requestAddTodo());

  const newTodo = new AddTodoRequest();
  newTodo.setTitle('hoge');
  newTodo.setDetail('fuga');

  client.addTodo(newTodo, {}, (err: any, res: Todo) => {
    dispatch(receiveAddTodo(res.toObject()));
  });
};
