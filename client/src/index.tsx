import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import FormContainer from './container/FormContainer';
import TodoListContainer from './container/TodoListContainer';
import styled from 'styled-components';

const store = createStore(reducer, applyMiddleware(thunk));
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

ReactDOM.render(
  <Provider store={store}>
    <Wrapper>
      <FormContainer />
      <TodoListContainer />
    </Wrapper>
  </Provider>,
  document.getElementById('root')
);
