import React, { useContext } from 'react';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import TaskCard from '../../molecules/TaskCard';
import {
  StyledTaskBlock,
  StyledTaskBlockHeader,
  StyledTaskBlockParagraph,
} from './StyledTaskBlock';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AppContext from '../../../context';

const TaskBlock = ({ title, variant }) => {
  const context = useContext(AppContext);
  const { tasks, addTask } = context;

  return (
    <StyledTaskBlock>
      <StyledTaskBlockHeader>
        <Heading headingType="h2">{title}</Heading>
        <StyledTaskBlockParagraph>{`(${2})`}</StyledTaskBlockParagraph>
        <Button text="Dodaj" faIcon={faPlus} />
      </StyledTaskBlockHeader>
      <TaskCard isEditable content title variant={variant} />
    </StyledTaskBlock>
  );
};

export default TaskBlock;
