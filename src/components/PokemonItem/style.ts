import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 300px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.text};
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.main};
  border-radius: 3px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.emphasis};
  }
`;

const PokemonImage = styled.img`
  width: 70px;
  aspect-ratio: 1/1;
  object-fit: contain;
  margin: 40px 0;
`;

const PokemonName = styled.p`
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`;

export { Container, PokemonImage, PokemonName };
