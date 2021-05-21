import styled from 'styled-components';

export const StyledTaskCard = styled.div`
  padding: 1rem;
  margin-top: 1rem;
  height: 20rem;
  background-color: ${(props) => props.theme.colors.bgWhite};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 5px;
`;
