import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  z-index: 1;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  color: #333;
`;

const Subtitle = styled.h2`
  color: black; 
  margin: 0;
  font-size: 1.5rem;
`;

const WelcomeText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  text-align: left;
  margin: 10px 0;
`;

const clickAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.9); }
  100% { transform: scale(1); }
`;

const shineAnimation = keyframes`
  0% {
    background-position: -200%;
  }
  100% {
    background-position: 200%;
  }
`;

const GradientButton = styled.button`
  background: linear-gradient(45deg, #ffcc00, #ff3300, #ff6600);
  background-size: 200% 200%;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  margin-top: 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    height: 100%;
    width: 100%;
    transform: skewX(-45deg);
    z-index: -1;
    transition: left 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:hover {
    background-position: 100% 0;
    transform: scale(1.05);

    &:before {
      left: 150%;
    }
  }

  &:active {
    animation: ${clickAnimation} 0.3s ease-in-out;
  }
`;

const HomePage = () => {
  return (
    <Container>
      <Subtitle>Добро пожаловать!</Subtitle>
      <WelcomeText>
        Нижний Новгород — магический город на слиянии рек Оки и Волги, где история встречается с современностью.
      </WelcomeText>
      <WelcomeText>
        Откройте для себя богатое культурное наследие, прогуляйтесь по живописным набережным, наслаждайтесь великолепными видами с высоты Нижегородского кремля.
      </WelcomeText>
      <WelcomeText>
        Вас ждут уникальные музеи, изысканная гастрономия и теплая атмосфера гостеприимства. Погрузитесь в неповторимый опыт Нижнего Новгорода — города, который запомнится навсегда.
      </WelcomeText>
      <GradientButton>Начать путешествие!</GradientButton>
    </Container>
  );
}

export default HomePage;
