import { connect } from 'react-redux';
import Form from '../components/Form';
import { addTodo, getTodos } from '../actions';

export default connect(
  (state: any) => ({ isError: state.isError, errorMsg: state.errorMsg }),
  { addTodo, getTodos }
)(Form);
