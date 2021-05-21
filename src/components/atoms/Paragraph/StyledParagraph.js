import styled from 'styled-components';

export const StyledParagraph = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.lg};
`;
