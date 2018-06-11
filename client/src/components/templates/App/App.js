import React from 'react'
import styled from 'styled-components'

import Header from '../../atoms/Header'
import SubHeader from '../../molecules/SubHeader'
import ListProducts from '../../molecules/ListProducts'

const AppContainer = styled.div`
  a {
    color: #a1a1a1;
  }
`

const App = ({ products }) =>
  <AppContainer>
    <Header />
    <SubHeader />
    <ListProducts products={products} />
  </AppContainer>

export default App
