import React, { useState, useContext } from 'react';
import AppContext from '../../../context';
import Input from '../../atoms/Input';
import TextArea from '../../atoms/TextArea';
import { StyledTaskCard, StyledFieldset } from './StyledTaskCard';

const TaskCard = ({ isEditable, title, content, id }) => {
  const context = useContext(AppContext);
  const { handleCardClick } = context;

  return (
    <StyledTaskCard onClick={() => handleCardClick(id)} isEditable={isEditable}>
      <StyledFieldset disabled={!isEditable}>
        <Input value={title} />
        <TextArea value={content} />
      </StyledFieldset>
    </StyledTaskCard>
  );
};

export default TaskCard;
