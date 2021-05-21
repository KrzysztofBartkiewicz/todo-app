import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledButton } from './StyledButton';

const Button = ({ onClickFn, faIcon, children }) => {
  return (
    <StyledButton onClick={onClickFn}>
      {children}
      <FontAwesomeIcon icon={faIcon} />
    </StyledButton>
  );
};

export default Button;
