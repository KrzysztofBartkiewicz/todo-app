import React from 'react';
import Heading from '../../atoms/Heading';
import Input from '../../atoms/Input';
import TextArea from '../../atoms/TextArea';
import { StyledTaskCard } from './StyledTaskCard';

const TaskCard = ({ isEditable }) => {
  return (
    <StyledTaskCard>
      {isEditable ? (
        <Input placeholder="Wpisz tytuł..." />
      ) : (
        <Heading>Tytuł</Heading>
      )}
      <TextArea isEditable placeholder="Tutaj wpisz opis..." />
    </StyledTaskCard>
  );
};

export default TaskCard;
