import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

export const StyledTaskCard = styled.form`
  padding: 1rem;
  margin-top: 1rem;
  height: 20rem;
  background-color: ${(props) => props.theme.colors.bgWhite};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  ${(props) =>
    props.isEditable &&
    css`
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.6);
    `}
`;

export const StyledHeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTaskIcon = styled(FontAwesomeIcon)`
  color: ${({ theme, variant }) => {
    if (variant === 'inprogress') {
      return `${theme.colors.icon.pending};`;
    }
    if (variant === 'finished') {
      return `${theme.colors.icon.finish};`;
    }
    return `${theme.colors.icon.default};`;
  }};
`;

export const StyledFieldset = styled.fieldset`
  border: none;
`;

export const StyledButtonWrapper = styled.div`
  display: none;
  justify-content: flex-end;

  ${(props) =>
    props.isEditable &&
    css`
      display: flex;
    `}
`;
