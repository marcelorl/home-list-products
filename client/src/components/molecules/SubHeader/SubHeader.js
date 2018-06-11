import React from 'react'
import styled from 'styled-components'
import {
  Container
} from 'reactstrap'

import Breadcrumb from '../../atoms/Breadcrumb'

const NavbarContainer = styled.div`
  background-color: #ecebec;
  font-size: 0.9rem;
  padding: 1rem 0;
  width: 100%;
`

const links = [
  { link: '#/inicio', label: 'Início' },
  { link: '#/homem', label: 'Homem' },
  { link: '#', label: 'Novidades Internacionais' }
]

const SubHeader = props =>
  <NavbarContainer>
    <Container>
      <Breadcrumb items={links} />
      <div>
        <h1>NOVIDADES DA MODA MASCULINA INTERNACIONAL</h1>
      </div>
      <div>
        O melhor da moda masculina atual e as peças mais recentes das marcas internacionais chegaram à seleção online da
        Farfetch. Descubra novidades da moda masculina e tendências que grandes designers para renovar o guarda-roupas,
        de <a href='#'>Salvatore Ferragamo</a> à <a href='#'>Burberry</a>.
      </div>
    </Container>
  </NavbarContainer>

export default SubHeader
