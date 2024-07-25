import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
  font-family: 'Roboto', sans-serif;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in;
`;

const MapContainer = styled.div`
  margin-top: 50px;
  height: 300px;
  background: url('https://placehold.co/400x300') no-repeat center center;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SettingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1.5s ease-in;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Instruction = styled.div`
  margin-top: 20px;
  font-size: 16px;
  color: #666;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 2s ease-in;
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px; /* Ensure enough space for the vertical slider */
`;

const Slider = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  appearance: none;
  width: 8px; 
  height: 100px; 
  background: linear-gradient(to bottom, #ff7f50, #ff4500);
  border-radius: 5px;
  outline: none;
  opacity: 0.8;
  transition: opacity 0.2s, transform 0.2s;
  writing-mode: vertical-lr; 
  
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  &::-webkit-slider-runnable-track {
    width: 8px;
    height: 100%;
    background: linear-gradient(to bottom, #ff7f50, #ff4500);
    border-radius: 5px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #ff4500;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.2s;

    &:hover {
      background-color: #ff7f50;
    }
  }

  &::-moz-range-track {
    width: 8px;
    height: 100%;
    background: linear-gradient(to bottom, #ff7f50, #ff4500);
    border-radius: 5px;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #ff4500;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.2s;

    &:hover {
      background-color: #ff7f50;
    }
  }
`;

const Button = styled.div`
  background-color: #ccc;
  height: 40px;
  margin: 10px 0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #ff7f50;
    transform: scale(1.05);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const MapPage = () => {
  return (
    <Container>
      <MapContainer />
      <SettingsContainer>
        <div>
          <LabelContainer>
            <Icon icon={faRoute} />
            <h2>Настройки</h2>
          </LabelContainer>
          <div>Экскурсия</div>
          <Button></Button>
          <Button></Button>
          <Button></Button>
        </div>
        <SliderContainer>
          <LabelContainer>
            <Icon icon={faVolumeUp} />
            <h2>Звук</h2>
          </LabelContainer>
          <Slider min="0" max="100" />
        </SliderContainer>
      </SettingsContainer>
      <Instruction>
        <h2>Инструкция</h2>
        <p>
          1. Выбери стартовую точку<br />
          2. Составь удобный маршрут<br />
          3. Как только подойдешь к объекту - нажми на него
        </p>
      </Instruction>
    </Container>
  );
};

export default MapPage;
