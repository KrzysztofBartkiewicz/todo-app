import React from 'react';
import { StyledInput } from './StyledInput';

const Input = ({ value, onChangeFn, placeholder }) => {
  return (
    <StyledInput
      value={value}
      onChange={onChangeFn}
      placeholder={placeholder}
    />
  );
};

export default Input;
