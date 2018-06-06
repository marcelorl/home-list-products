import React from 'react'
import styled from 'styled-components'
import {
  Navbar
} from 'reactstrap'

import logo from './images/logo.png'

const NavbarContainer = styled(Navbar)`
  padding: 25px 0;
  box-shadow: 1px 1px 1px #d3d3d3;
`

const Logo = styled.img`
  height: 1.5rem;
  width: 10rem;
`

const Header = props =>
  <NavbarContainer className='d-flex justify-content-center container-fluid px-0' color='faded' light expand='lg'>
    <Logo src={logo} alt="logo"/>
  </NavbarContainer>

export default Header
