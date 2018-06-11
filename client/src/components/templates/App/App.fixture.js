import App from './App'

export default {
  component: App,
  props: {
    products: {
      error: '',
      loading: false,
      list: []
    }
  }
}
