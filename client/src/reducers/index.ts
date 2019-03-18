import { REQUEST_ADD_TODO, RECEIVE_ADD_TODO } from '../actions';

const initialState = {
  todo: {},
  todoList: []
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case REQUEST_ADD_TODO:
      return state;
    case RECEIVE_ADD_TODO:
      return Object.assign({}, state, {
        todo: action.todo
      });
    default:
      return state;
  }
};
