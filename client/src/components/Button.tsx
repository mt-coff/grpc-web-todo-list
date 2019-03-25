import React from 'react';

interface IProps {
  text: string;
  type: string;
  handleClick: () => void;
}

const Button: React.FC<IProps> = props => {
  return (
    <button type={props.type} onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

export default Button;
