import styled from 'styled-components';

const ThemeButton = styled.button`
  position: fixed;
  top: min(50px, 5vw);
  right: min(50px, 5vw);
  background: none;
  border: none;
  cursor: pointer;
  &:focus,
  &:hover {
    opacity: 0.5;
  }
`;

const ThemeIcon = styled.img`
  width: min(50px, 10vw);
  aspect-ratio: 1/1;
  color: ${({ theme }) => theme.text};
`;

export { ThemeButton, ThemeIcon };
