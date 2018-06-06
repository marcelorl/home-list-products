import React from 'react'
import styled from 'styled-components'
import {
  Navbar
} from 'reactstrap'

import logo from './images/logo.png'

const NavbarContainer = styled(Navbar)`
  padding: 25px 0;
`

const Logo = styled.img`
  height: 1.5rem;
  width: 10rem;
`

const Header = props =>
  <NavbarContainer
    className='d-flex justify-content-center container-fluid px-0' color='faded' light expand='lg' fixed='top'>
    <Logo src={logo} alt="logo"/>
  </NavbarContainer>

export default Header
