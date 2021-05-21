import React from 'react';
import TaskBlock from '../../organisms/TaskBlock';
import { StyledMain } from './StyledMain';

const Main = () => {
  return (
    <StyledMain>
      <TaskBlock title="Do zrobienia" tasksNumber={2} />
      <TaskBlock title="W trakcie" tasksNumber={2} />
      <TaskBlock title="Zrobiobne" tasksNumber={2} />
    </StyledMain>
  );
};

export default Main;
