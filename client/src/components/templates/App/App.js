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

const App = props => {
  return (
    <AppContainer>
      <Header />
      <SubHeader />
      <ListProducts />
    </AppContainer>
  )
}


export default App
