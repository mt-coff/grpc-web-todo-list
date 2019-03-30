import React from 'react';
import Input from './Input';
import Button from './Button';

interface IProps {
  addTodo: any;
  getTodos: any;
  isError: boolean;
  errorMsg: string;
}

class Form extends React.Component<IProps> {
  state = {
    title: '',
    detail: ''
  };

  handleTitleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ title: event.target.value });
  };

  handleDetailInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ detail: event.target.value });
  };

  registerTodo = (): void => {
    this.props
      .addTodo(this.state.title, this.state.detail)
      .then(() => {
        this.props.getTodos();
      })
      .catch(() => {
        window.alert(this.props.errorMsg);
      });
  };

  render() {
    return (
      <div>
        <form>
          <Input
            name="title"
            placeholder="タイトル"
            handleChange={this.handleTitleInput}
          />
          <Input
            name="detail"
            placeholder="詳細"
            handleChange={this.handleDetailInput}
          />
          <Button text="登録" type="button" handleClick={this.registerTodo} />
        </form>
      </div>
    );
  }
}

export default Form;
