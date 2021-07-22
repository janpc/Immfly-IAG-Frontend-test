import styled from 'styled-components';

const ThemeButton = styled.button`
  position: fixed;
  top: 50px;
  right: 50px;
  background: none;
  border: none;
  cursor: pointer;
  &:focus,
  &:hover {
    opacity: 0.5;
  }
`;

const ThemeIcon = styled.img`
  width: 50px;
  aspect-ratio: 1/1;
  color: ${({ theme }) => theme.text};
`;

export { ThemeButton, ThemeIcon };
