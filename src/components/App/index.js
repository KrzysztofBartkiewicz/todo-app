import React from 'react';
import GlobalStyles from '../../globalStyles';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import { theme } from '../../themes/mainTheme';
import { ThemeProvider } from 'styled-components';
import { StyledApp, StyledHeader } from './StyledApp';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledApp className="app">
        <StyledHeader className="app__header">
          <Heading headingType="h1">Lista zadań</Heading>
          <Button faIcon={faPlus}>Dodaj</Button>
        </StyledHeader>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
