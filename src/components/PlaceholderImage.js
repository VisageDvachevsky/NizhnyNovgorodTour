import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://i.ibb.co/J3ZpX4r/header-image.jpg");
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaceholderImage = () => {
  return (
    <ImageContainer>
    </ImageContainer>
  );
}

export default PlaceholderImage;
