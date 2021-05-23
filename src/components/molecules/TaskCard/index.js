import { faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import AppContext from '../../../context';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import TextArea from '../../atoms/TextArea';
import {
  StyledTaskCard,
  StyledFieldset,
  StyledButtonWrapper,
} from './StyledTaskCard';

const TaskCard = ({ title, content, id }) => {
  const context = useContext(AppContext);
  const {
    handleClick,
    activeTaskID,
    handleTitleChange,
    handleContentChange,
    handleSaveTask,
    handleDiscardTask,
  } = context;

  const isTaskActive = activeTaskID === id ? true : false;

  return (
    <StyledTaskCard
      onClick={(e) => handleClick(e, id)}
      isEditable={isTaskActive}
    >
      <StyledFieldset disabled={!isTaskActive}>
        <Input
          value={title}
          onChangeFn={(e) => handleTitleChange(e, id)}
          placeholder="Wpisz tytuł..."
        />
        <TextArea
          value={content}
          onChangeFn={(e) => handleContentChange(e, id)}
          placeholder="Wpisz opis..."
        />
        <StyledButtonWrapper isEditable={isTaskActive}>
          <Button
            small
            onClickFn={(e) => {
              e.stopPropagation();
              handleSaveTask(id);
            }}
            faIcon={faSave}
            text="Zapisz"
            style={{ marginRight: '.5rem' }}
          />
          <Button
            small
            onClickFn={() => handleDiscardTask(id)}
            faIcon={faTrashAlt}
            text="Odrzuć"
          >
            Zapisz
          </Button>
        </StyledButtonWrapper>
      </StyledFieldset>
    </StyledTaskCard>
  );
};

export default TaskCard;
