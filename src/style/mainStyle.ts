import styled from 'styled-components';

const ThemeButton = styled.button`
  position: fixed;
  top: 50px;
  right: 50px;
  background: none;
  border: none;
`;

const ThemeIcon = styled.img`
  width: 50px;
  aspect-ratio: 1/1;
  color: ${({ theme }) => theme.text};
`;

export { ThemeButton, ThemeIcon };
