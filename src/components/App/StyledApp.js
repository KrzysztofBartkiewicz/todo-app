import styled from 'styled-components';

export const StyledApp = styled.div`
  min-height: 100vh;
  margin-left: 7rem;
  background-color: ${(props) => props.theme.colors.bgSecondary};
`;

export const StyledHeader = styled.header`
  padding: 3rem;
  background-color: ${(props) => props.theme.colors.bgWhite};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
`;
