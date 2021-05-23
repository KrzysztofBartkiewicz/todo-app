import React from 'react';
import { StyledTextArea } from './StyledTextArea';

const TextArea = ({ value, placeholder, onChangeFn }) => {
  return (
    <StyledTextArea
      value={value}
      onChange={onChangeFn}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
