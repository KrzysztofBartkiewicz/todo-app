import React from 'react';
import { StyledTextArea } from './StyledTextArea';

const TextArea = ({ value, isEditable, placeholder, onKeyPressFn }) => {
  return (
    <StyledTextArea
      value={value}
      readOnly={!isEditable}
      placeholder={placeholder}
      onKeyPress={onKeyPressFn}
    />
  );
};

export default TextArea;
