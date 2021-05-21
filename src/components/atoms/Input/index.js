import React from 'react';
import { StyledInput } from './StyledInput';

const Input = ({ value, onChangeFn }) => {
  return <StyledInput value={value} onChange={onChangeFn} />;
};

export default Input;
