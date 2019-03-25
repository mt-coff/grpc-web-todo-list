import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import FormContainer from './container/FormContainer';
import TodoListContainer from './container/TodoListContainer';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <FormContainer />
    <TodoListContainer />
  </Provider>,
  document.getElementById('root')
);
