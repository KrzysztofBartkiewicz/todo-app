import React, { useState, useEffect, useRef } from 'react';
import GlobalStyles from '../../globalStyles';
import Heading from '../atoms/Heading';
import Header from '../molecules/Header';
import Main from '../templates/Main';
import AppContext from '../../context';
import { theme } from '../../themes/mainTheme';
import { ThemeProvider } from 'styled-components';
import { StyledApp } from './StyledApp';

const App = () => {
  const appRef = useRef(null);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'adc',
      content: 'dsfaasdf',
      isEditable: true,
      variant: 'inprogress',
    },
    {
      id: 2,
      title: 'adc',
      content: 'dsfaasdf',
      isEditable: false,
      variant: 'inprogress',
    },
    {
      id: 3,
      title: 'adc',
      content: 'dsfaasdf',
      isEditable: true,
      variant: 'todo',
    },
    {
      id: 4,
      title: 'adc',
      content: 'dsfaasdf',
      isEditable: false,
      variant: 'todo',
    },
    {
      id: 5,
      title: 'adc',
      content: 'dsfaasdf',
      isEditable: true,
      variant: 'finished',
    },
    {
      id: 6,
      title: 'adc',
      content: 'dsfaasdf',
      isEditable: false,
      variant: 'finished',
    },
  ]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const handleCardClick = (id) => {
    const mappedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isEditable: true,
        };
      } else {
        return {
          ...task,
          isEditable: false,
        };
      }
    });

    setTasks([...mappedTasks]);
  };

  // useEffect(() => {
  //   const handleClick = () => {

  //   }

  //   document.addEventListener('mousedown', handleClick)
  // }, [])

  return (
    <AppContext.Provider
      value={{
        tasks,
        addTask,
        handleCardClick,
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledApp ref={appRef}>
          <Header>
            <Heading headingType="h1">Lista zadań</Heading>
          </Header>
          <Main />
        </StyledApp>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
