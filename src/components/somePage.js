import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #fff;
  color: #333;
`;

const Subtitle = styled.h2`
  color: black; 
  margin: 0;
  font-size: 1.5rem;
  text-align: left;
`;

const WelcomeText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  text-align: left;
  margin: 10px 0;
`;

const somePage = () => {
  return (
    <Container>
      <Subtitle>ЧМОПИДАР</Subtitle>
      <WelcomeText>
        ЫЫЫЫЫ
      </WelcomeText>
      <WelcomeText>
        ЫЫЫЫЫЫ
      </WelcomeText>
      <WelcomeText>
        ЫЫЫЫЫЫЫЫЫ
      </WelcomeText>
    </Container>
  );
}

export default somePage;
