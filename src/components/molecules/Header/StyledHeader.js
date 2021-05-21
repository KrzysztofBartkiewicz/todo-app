import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 3rem;
  background-color: ${(props) => props.theme.colors.bgWhite};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
`;
