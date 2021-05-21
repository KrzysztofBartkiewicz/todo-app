import React from 'react';
import { StyledHeader } from './StyledHeader';

const Header = ({ children, className }) => {
  return <StyledHeader className={className}>{children}</StyledHeader>;
};

export default Header;
