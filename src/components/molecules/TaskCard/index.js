import React, { useState, useContext } from 'react';
import AppContext from '../../../context';
import Heading from '../../atoms/Heading';
import Input from '../../atoms/Input';
import TextArea from '../../atoms/TextArea';
import { StyledTaskCard } from './StyledTaskCard';

const TaskCard = ({ isEditable, variant }) => {
  const context = useContext(AppContext);
  const { addTask } = context;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const submit = (e) => {
    if (title.length === 0) {
      return;
    }

    if (e.key === 'Enter') {
      addTask({ title, content, variant });
    }
  };

  return (
    <StyledTaskCard isEditable={isEditable}>
      {isEditable ? (
        <Input
          value={title}
          onChangeFn={handleTitleChange}
          placeholder="Wpisz tytuł..."
          onKeyPressFn={submit}
        />
      ) : (
        <Heading>{title}</Heading>
      )}
      <TextArea
        isEditable
        value={content}
        onChangeFn={handleContentChange}
        placeholder="Tutaj wpisz opis..."
        onKeyPressFn={submit}
      />
    </StyledTaskCard>
  );
};

export default TaskCard;
