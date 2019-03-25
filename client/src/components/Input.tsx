import React from 'react';

interface Iprops {
  name: string;
  placeholder?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Iprops> = props => {
  return (
    <input
      name={props.name}
      placeholder={props.placeholder}
      onInput={props.handleChange}
    />
  );
};

export default Input;
