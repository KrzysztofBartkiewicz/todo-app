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

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
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
