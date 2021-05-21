import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledButton } from './StyledButton';

const Button = ({ onClickFn, faIcon, text }) => {
  return (
    <StyledButton onClick={onClickFn}>
      {text}
      <FontAwesomeIcon icon={faIcon} />
    </StyledButton>
  );
};

export default Button;
