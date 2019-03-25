import { TodoListServiceClient } from '../pb/TodoServiceClientPb';
import { AddTodoRequest, Todo, Empty, TodoListResponse } from '../pb/todo_pb';

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

export const addTodo = (title: string, detail: string) => (dispatch: any) => {
  dispatch(requestAddTodo());

  const newTodo = new AddTodoRequest();
  newTodo.setTitle(title);
  newTodo.setDetail(detail);

  client.addTodo(newTodo, {}, (err: any, res: Todo) => {
    if (err) {
      dispatch(handleError(err.message));
      return;
    }
    dispatch(receiveAddTodo(res.toObject()));
  });
};

export const REQUEST_TODO_LIST = '/EQUEST_TODO_LIST';
export const requestGetTodoList = () => ({
  type: 'REQUEST_TODO_LIST'
});

export const RECEIVE_TODO_LIST = 'RECEIVE_TODO_LIST';
export const receiveGetTodoList = (todoList: TodoListResponse.AsObject) => ({
  type: 'RECEIVE_TODO_LIST',
  todoList: todoList
});

export const getTodos = () => (dispatch: any) => {
  const empty: Empty = {
    toObject: () => ({}),
    serializeBinary: () => new Uint8Array()
  };

  client.getTodoList(empty, {}, (err: any, res: TodoListResponse) => {
    dispatch(requestGetTodoList());
    if (err) {
      dispatch(handleError(err.message));
      return;
    }
    dispatch(receiveGetTodoList(res.toObject()));
  });
};

export const HANDLE_ERROR = 'HANDLE_ERROR';
export const handleError = (msg: string) => ({
  type: 'HANDLE_ERROR',
  msg
});
