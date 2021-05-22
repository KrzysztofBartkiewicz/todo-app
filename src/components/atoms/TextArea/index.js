import React from 'react';
import { StyledTextArea } from './StyledTextArea';

const TextArea = ({ value, isEditable, placeholder }) => {
  return (
    <StyledTextArea
      value={value}
      readOnly={!isEditable}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
