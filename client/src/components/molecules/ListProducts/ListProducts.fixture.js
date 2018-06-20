import ListProducts from './ListProducts'
import { Product } from '../../../models/product'

const productCollection = Product.buildList(3)

export default {
  component: ListProducts,
  props: {
    products: {
      error: '',
      loading: false,
      list: productCollection
    }
  }
}
