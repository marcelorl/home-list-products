import AppContainer from './App.container'
import { ProductResponse } from '../../../models/product'

const productCollection = ProductResponse.buildList(3)

export default {
  component: AppContainer,
  props: {
    fetchProducts: () => {}
  },
  reduxState: {
    products: {
      error: null,
      list: [],
      loading: true
    }
  },
  xhr: [
    {
      url: '//localhost:1337/products',
      response: (req, res) =>
        res.status(200).body({
          entries: productCollection
        })
    }
  ]
}
