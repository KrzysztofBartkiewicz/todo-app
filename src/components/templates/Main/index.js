import React from 'react';
import TaskBlock from '../../organisms/TaskBlock';
import { StyledMain } from './StyledMain';

const Main = () => {
  return (
    <StyledMain>
      <TaskBlock variant="todo" title="Do zrobienia" />
      <TaskBlock variant="inprogress" title="W trakcie" />
      <TaskBlock variant="finished" title="Zrobiobne" />
    </StyledMain>
  );
};

export default Main;
