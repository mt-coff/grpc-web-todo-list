import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduser from './reducers';
import thunk from 'redux-thunk';
import { addTodo } from './actions';

const store = createStore(reduser, applyMiddleware(thunk));

const fuga = () => {
  store.dispatch(addTodo());
  console.log(store.getState());
};

ReactDOM.render(
  <Provider store={store}>
    <div>HI</div>
    <button onClick={fuga}>hoge</button>
  </Provider>,
  document.getElementById('root')
);
