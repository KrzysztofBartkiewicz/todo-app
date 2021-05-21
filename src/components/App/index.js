import React from 'react';
import GlobalStyles from '../../globalStyles';
import Heading from '../atoms/Heading';
import Header from '../molecules/Header';
import Main from '../templates/Main';
import AppContext from '../../context';
import { theme } from '../../themes/mainTheme';
import { ThemeProvider } from 'styled-components';
import { StyledApp } from './StyledApp';

const App = () => {
  return (
    <AppContext.Provider>
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
