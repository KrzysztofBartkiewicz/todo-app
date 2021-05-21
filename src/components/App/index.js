import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../globalStyles';
import { theme } from '../../themes/mainTheme';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import { StyledApp, StyledHeader } from './StyledApp';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledApp className="app">
        <StyledHeader className="app__header">
          <Heading headingType="h1">Lista zadań</Heading>
          <Paragraph>;akdjfndkjs</Paragraph>
        </StyledHeader>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
