import React, { useContext } from 'react';
import {
  faCheck,
  faEdit,
  faList,
  faSave,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import AppContext from '../../../context';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import TextArea from '../../atoms/TextArea';
import {
  StyledTaskCard,
  StyledFieldset,
  StyledButtonWrapper,
  StyledHeadWrapper,
  StyledTaskIcon,
} from './StyledTaskCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TaskCard = ({ title, content, id, variant }) => {
  const context = useContext(AppContext);
  const {
    handleTaskClick,
    activeTaskID,
    handleTitleChange,
    handleContentChange,
    handleSaveTask,
    handleDiscardTask,
  } = context;

  const isTaskActive = activeTaskID === id ? true : false;
  let taskIcon = null;

  switch (variant) {
    case 'inprogress':
      taskIcon = faEdit;
      break;
    case 'finished':
      taskIcon = faCheck;
      break;
    default:
      taskIcon = faList;
      break;
  }

  return (
    <StyledTaskCard
      id={id}
      onClick={(e) => handleTaskClick(e, id)}
      isEditable={isTaskActive}
      onSubmit={(e) => {
        e.preventDefault();
        handleSaveTask(id);
      }}
    >
      <StyledFieldset disabled={!isTaskActive}>
        <StyledHeadWrapper>
          <Input
            value={title}
            onChangeFn={(e) => handleTitleChange(e, id)}
            placeholder="Wpisz tytuł..."
          />
          <StyledTaskIcon icon={taskIcon} size="lg" variant={variant} />
        </StyledHeadWrapper>

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
            onClickFn={(e) => {
              e.stopPropagation();
              handleDiscardTask(id);
            }}
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
