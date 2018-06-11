import ListProducts from './ListProducts'

export default {
  component: ListProducts,
  props: {
    products: {
      error: '',
      loading: false,
      list: []
    }
  }
}
