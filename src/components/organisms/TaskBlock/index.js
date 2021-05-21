import React from 'react';
import { StyledTaskBlock } from './StyledTaskBlock';

const TaskBlock = ({ children }) => {
  return <StyledTaskBlock>{children}</StyledTaskBlock>;
};

export default TaskBlock;
