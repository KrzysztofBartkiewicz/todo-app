import React from 'react';
import GlobalStyles from '../../globalStyles';
import Heading from '../atoms/Heading';
import { theme } from '../../themes/mainTheme';
import { ThemeProvider } from 'styled-components';
import { StyledApp } from './StyledApp';
import { StyledHeader } from '../molecules/Header/StyledHeader';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledApp className="app">
        <StyledHeader className="app__header">
          <Heading headingType="h1">Lista zadań</Heading>
        </StyledHeader>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
