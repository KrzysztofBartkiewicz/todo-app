import React from 'react';
import { StyledInput } from './StyledInput';

const Input = ({ value, onChangeFn, onKeyPressFn, placeholder }) => {
  return (
    <StyledInput
      value={value}
      onChange={onChangeFn}
      placeholder={placeholder}
      onKeyPress={onKeyPressFn}
    />
  );
};

export default Input;
