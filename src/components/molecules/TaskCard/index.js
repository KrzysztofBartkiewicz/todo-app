import React from 'react';
import { StyledTaskCard } from './StyledTaskCard';

const TaskCard = ({ children, isEditable }) => {
  return <StyledTaskCard>{children}</StyledTaskCard>;
};

export default TaskCard;
