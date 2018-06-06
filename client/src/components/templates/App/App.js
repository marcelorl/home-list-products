import React from 'react'
import styled from 'styled-components'

import Header from '../../atoms/Header'
import SubHeader from '../../molecules/SubHeader'

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
    </AppContainer>
  )
}


export default App
