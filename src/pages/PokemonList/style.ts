import styled from 'styled-components';
import { main as mainFont } from '../../style/fonts';

const Background = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-family: ${mainFont};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;

  & a {
    text-decoration: none;
  }
`;

const ImmflyLogo = styled.img`
  width: 50px;
  aspect-ratio: 1 / 1;
`;

const PokemonLogo = styled.img`
  width: 400px;
  aspect-ratio: 5 / 2;
  object-fit: cover;
`;

export { Background, ImmflyLogo, PokemonLogo };
