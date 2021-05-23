import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledButton } from './StyledButton';

const Button = ({
  onClickFn,
  faIcon,
  text,
  isDisabled,
  type = 'button',
  small,
  style,
}) => {
  return (
    <StyledButton
      onClick={onClickFn}
      disabled={isDisabled}
      type={type}
      small={small}
      style={style}
    >
      {text}
      <FontAwesomeIcon icon={faIcon} />
    </StyledButton>
  );
};

export default Button;
