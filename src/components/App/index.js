import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../globalStyles';
import { theme } from '../../themes/mainTheme';
import { StyledApp, StyledHeader } from './StyledApp';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledApp className="app">
        <StyledHeader className="app__header">
          <h1 className="app__heading">Lista zadań</h1>
        </StyledHeader>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
