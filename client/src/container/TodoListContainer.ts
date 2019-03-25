import { connect } from 'react-redux';
import { getTodos } from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = (state: any) => ({
  todoList: state.todoList
});

export default connect(
  mapStateToProps,
  { getTodos }
)(TodoList);
