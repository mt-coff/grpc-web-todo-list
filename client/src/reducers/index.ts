import {
  REQUEST_ADD_TODO,
  RECEIVE_ADD_TODO,
  RECEIVE_TODO_LIST,
  REQUEST_TODO_LIST,
  HANDLE_ERROR
} from '../actions';

const initialState = {
  todo: {},
  todoList: [],
  isError: false,
  errorMsg: ''
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case REQUEST_ADD_TODO:
      return state;
    case RECEIVE_ADD_TODO:
      return Object.assign({}, state, {
        todo: action.todo,
        isError: false,
        errorMsg: ''
      });
    case REQUEST_TODO_LIST:
      return state;
    case RECEIVE_TODO_LIST:
      return Object.assign({}, state, {
        todoList: action.todoList.todoList,
        isError: false,
        errorMsg: ''
      });
    case HANDLE_ERROR:
      return Object.assign({}, state, {
        isError: true,
        errorMsg: action.msg
      });
    default:
      return state;
  }
};
