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
  const getTasksFromLS = () =>
    JSON.parse(localStorage.getItem('toDoListTasks')) || [];

  const saveTaskInLS = () =>
    localStorage.setItem('toDoListTasks', JSON.stringify(tasks));

  const [tasks, setTasks] = useState(getTasksFromLS());
  const [activeTaskID, setActiveTaskID] = useState(null);
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  const [isNewTaskAdding, setIsNewTaskAdding] = useState(false);

  useEffect(() => {
    const setNewTaskActive = () => {
      if (tasks[0] && isNewTaskAdding) {
        setActiveTaskID(tasks[0].id);
      }
    };
    setNewTaskActive();
  }, [isNewTaskAdding]);

  useEffect(() => {
    document.addEventListener('mousedown', handleGlobalClick);
    return () => document.removeEventListener('mousedown', handleGlobalClick);
  });

  useEffect(() => {
    localStorage.setItem('toDoListTasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleGlobalClick = (e) => {
    if (activeTaskID) {
      const isClickedOutsideActiveTask = e.path.every(
        (node) => node.id !== activeTaskID.toString()
      );
      if (isEditModeOn && isClickedOutsideActiveTask) {
        handleSaveTask(activeTaskID);
      }
    }
  };

  const addTask = (variant) => {
    if (!isEditModeOn) {
      setIsEditModeOn(true);
      setIsNewTaskAdding(true);
      const newTask = {
        id: Math.random(),
        title: '',
        content: '',
        variant,
      };
      setTasks((prev) => [newTask, ...prev]);
    }
  };

  const handleSaveTask = (taskId) => {
    const activeTask = tasks.find((task) => task.id === taskId);
    if (activeTask.title.length === 0) {
      alert('Tytuł nie może być pusty');
      return;
    }
    setActiveTaskID(null);
    setIsNewTaskAdding(false);
    setIsEditModeOn(false);
  };

  const handleDiscardTask = (taskId) => {
    const filterdTaks = tasks.filter((task) => task.id !== taskId);
    setTasks([...filterdTaks]);
    setIsEditModeOn(false);
    setIsNewTaskAdding(false);
  };

  const handleTaskClick = (e, taskId) => {
    setActiveTaskID(taskId);
    setIsEditModeOn(true);
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
        handleTaskClick,
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
