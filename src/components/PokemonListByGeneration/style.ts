import styled from 'styled-components';

const Container = styled.div`
  width: min(90vw, 1000px);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 50px;
  gap: 20px;
  justify-content: center;
`;

const InfoContainer = styled.div`
  margin: 50px 0;
`;

const GenerationTitle = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const GenerationCount = styled.p`
  text-align: center;
  font-size: 14px;
  margin-top: 5px;
`;

export { Container, GenerationTitle, InfoContainer, GenerationCount };
