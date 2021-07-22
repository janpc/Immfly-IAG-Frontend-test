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
  justify-content: center;
  padding: 50px 0;

  & a {
    text-decoration: none;
  }
`;

const Container = styled.div`
  width: 300px;
  position: relative;
  background-color: ${(props) => props.theme.main};
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 3px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const PokemonImage = styled.img`
  width: 120px;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  align-self: center;
`;

const PokemonName = styled.p`
  align-self: center;
  text-transform: capitalize;
  margin-top: 1rem;
`;

const PokemonDetail = styled.p`
  font-weight: bold;
  & > span:not(:first-of-type) {
    font-size: 14px;
    margin-left: 2px;
    font-weight: 400;
  }

  & > p {
    text-transform: capitalize;
    font-weight: 400;
    margin-top: 0.5rem;

    &:before {
      content: '·';
      margin-left: 5px;
      font-weight: bold;
    }
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

export {
  Background,
  Container,
  PokemonImage,
  PokemonName,
  PokemonDetail,
  CloseButton
};
