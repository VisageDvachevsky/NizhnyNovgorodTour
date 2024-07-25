import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const MenuButton = styled.button`
  background-color: transparent;
  color: white;
  padding: 10px;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px; /* Rounded corners */
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: rotate(90deg);
  }

  &:focus {
    outline: none;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

const FullScreenMenu = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1000;
  animation: ${(props) => (props.animateOut ? fadeOut : fadeIn)} 0.5s forwards;
`;

const MenuItem = styled.a`
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  padding: 20px 40px;
  margin: 10px;
  font-size: 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  display: inline-block;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    background: linear-gradient(135deg, #a777e3, #6e8efb);
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const DropdownMenu = () => {
  const [show, setShow] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const handleMenuToggle = () => {
    if (show) {
      setAnimateOut(true);
      setTimeout(() => {
        setShow(false);
        setAnimateOut(false);
      }, 300);
    } else {
      setShow(true);
    }
  };

  return (
    <MenuContainer>
      <MenuButton onClick={handleMenuToggle}>
        <i className="fas fa-bars"></i>
      </MenuButton>
      <FullScreenMenu show={show} animateOut={animateOut} onClick={handleMenuToggle}>
        <Link to="/">
          <MenuItem to="/">Главная</MenuItem>
        </Link>
        
        <Link to="/map">
          <MenuItem >Карта</MenuItem>
        </Link>
        
      </FullScreenMenu>
    </MenuContainer>
  );
}

export default DropdownMenu;
