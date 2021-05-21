import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph';
import Header from '../../molecules/Header';

export const StyledTaskBlock = styled.div``;

export const StyledTaskBlockHeader = styled(Header)`
  padding: 1rem 0;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTaskBlockParagraph = styled(Paragraph)`
  margin-left: 1rem;
  flex-grow: 1;
`;
