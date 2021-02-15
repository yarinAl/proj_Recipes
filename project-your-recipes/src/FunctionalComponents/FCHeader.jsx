import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  height: 60px;
  background: transparent;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #fff;
  padding-left: 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;

  &:hover {
    color: #fff !important;
    text-decoration: none !important;
  }
`;

const NavItems = styled.div``;

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1rem;

  &:hover {
    color: #fff !important;
    text-decoration: none !important;
  }
`;

function FCHeader(props) {

  //sessionStorage -קבלת מידע שנשמר על המשתמש המחובר ב
  let user = JSON.parse(sessionStorage.getItem(`users`))

  return (
    <Navbar>
      <Logo to='/'>Your-Recipes</Logo>
      <NavItems>
        <NavbarLink to='/'>Home</NavbarLink>
        <NavbarLink to='/about'>About</NavbarLink>
        <NavbarLink to='/contant'>Contant</NavbarLink>
        <NavbarLink to={user ? '/profile' : '/login'}>{user ? 'Profile' : 'Login'}</NavbarLink>
      </NavItems>
    </Navbar>
  );
};

export default withRouter(FCHeader);