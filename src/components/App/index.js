import React, { useState, useEffect } from 'react';
import GlobalStyles from '../../globalStyles';
import Heading from '../atoms/Heading';
import Header from '../molecules/Header';
import Main from '../templates/Main';
import AppContext from '../../context';
import { theme } from '../../themes/mainTheme';
import { ThemeProvider } from 'styled-components';
import { StyledApp } from './StyledApp';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [activeTaskID, setActiveTaskID] = useState(null);
  const [isAddingDisabled, setIsAddingDisabled] = useState(false);

  const addTask = (variant) => {
    // if (!isAddingDisabled) {
    setIsAddingDisabled(true);
    const newTask = {
      id: Math.random(),
      title: '',
      content: '',
      variant,
    };
    setTasks((prev) => [newTask, ...prev]);
    // }
  };

  const handleSaveTask = (taskId) => {
    const activeTask = tasks.find((task) => task.id === taskId);
    if (activeTask.title.length === 0) {
      alert('Tytuł nie może być pusty');
      return;
    }
    setActiveTaskID(null);
  };

  const handleDiscardTask = (taskId) => {
    const filterdTaks = tasks.filter((task) => task.id !== taskId);
    setTasks([...filterdTaks]);
  };

  const handleClick = (e, taskId) => {
    e.stopPropagation();
    setActiveTaskID(taskId);
  };

  const handleTitleChange = (e, taskId) => {
    const mappedTasks = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            title: e.target.value,
          }
        : {
            ...task,
          }
    );
    setTasks([...mappedTasks]);
  };

  const handleContentChange = (e, taskId) => {
    const mappedTasks = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            content: e.target.value,
          }
        : {
            ...task,
          }
    );
    setTasks([...mappedTasks]);
  };

  return (
    <AppContext.Provider
      value={{
        tasks,
        activeTaskID,
        handleDiscardTask,
        handleSaveTask,
        handleTitleChange,
        handleContentChange,
        addTask,
        handleClick,
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledApp>
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
