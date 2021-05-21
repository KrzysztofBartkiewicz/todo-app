import React from 'react';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import TaskCard from '../../molecules/TaskCard';
import {
  StyledTaskBlock,
  StyledTaskBlockHeader,
  StyledTaskBlockParagraph,
} from './StyledTaskBlock';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const TaskBlock = ({ title, tasksNumber }) => {
  return (
    <StyledTaskBlock>
      <StyledTaskBlockHeader>
        <Heading headingType="h2">{title}</Heading>
        <StyledTaskBlockParagraph>{`(${tasksNumber})`}</StyledTaskBlockParagraph>
        <Button text="Dodaj" faIcon={faPlus} />
      </StyledTaskBlockHeader>
      <TaskCard isEditable />
    </StyledTaskBlock>
  );
};

export default TaskBlock;
