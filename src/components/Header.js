import React from 'react';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';
import PlaceholderImage from './PlaceholderImage';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.fullHeight ? '100%' : '200px'};
`;

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: rgba(0, 18, 31, 0.7);
  color: white;
  padding: 10px;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const HeaderTitle = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const Header = ({ showPlaceholder, fullHeight }) => {
  return (
    <Container fullHeight={fullHeight}>
      <Navbar>
        <DropdownMenu />
        <HeaderTitle>Путеводитель</HeaderTitle>
      </Navbar>
      {showPlaceholder && <PlaceholderImage />}
    </Container>
  );
}

export default Header;
