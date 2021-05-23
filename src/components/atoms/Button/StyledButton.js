import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  min-width: 12rem;
  padding: 1rem 2rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 2rem;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
  background-color: ${(props) => props.theme.colors.bgWhite};
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.small &&
    css`
      min-width: 9rem;
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
    `}

  &:disabled {
    cursor: default;
  }
`;
