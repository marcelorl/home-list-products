import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Alert,
  Container
} from 'reactstrap'

import Item from '../../atoms/Item'

const ListProductsContainer = styled.div`
  background-color: #f4f4f4;
  padding: 1rem 0;
  width: 100%;
`

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`

const ListProducts = ({ products: { error, list, loading } }) => {
  if (error) {
    return (
      <Alert color='danger'>{error}</Alert>
    )
  }

  if (loading) {
    return (
      <div>Carregando ...</div>
    )
  }

  return (
    <ListProductsContainer>
      <Container>
        <ListContainer>
          {list.map(item => <Item key={item.id} {...item} /> )}
        </ListContainer>
      </Container>
    </ListProductsContainer>
  )
}

ListProducts.propTypes = {
  products: PropTypes.shape({
    error: PropTypes.string,
    list: PropTypes.array,
    loading: PropTypes.bool
  }).isRequired
}

export default ListProducts
