import App from './App'
import { Product } from '../../../models/product'

const productCollection = Product.buildList(3)

export default {
  component: App,
  props: {
    products: {
      error: '',
      loading: false,
      list: productCollection
    }
  }
}
