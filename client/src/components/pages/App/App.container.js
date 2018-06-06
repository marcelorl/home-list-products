import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchProducts } from '../../../actions/products'
import AppTemplate from '../../templates/App'

class App extends Component {
  async componentDidMount () {
    const { fetchProducts } = this.props

    await fetchProducts()
  }

  render () {
    return (
      <AppTemplate {...this.props} />
    )
  }
}

const mapStateToProps = ({ products }) =>
  ({
    products
  })

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
