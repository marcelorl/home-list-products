import AppContainer from './App.container'
import image from './__tests__/test.png'

const products = [
  {
    "id": 12266474,
    "shortDescription": "Lucy Patent Leather high-waisted pencil skirt ",
    "images": [
      {},
      {
        "size": "250",
        "url": image
      }
    ],
    "price": 1194.1849,
    "formattedPrice": "1 194,18 €",
    "brand": {
      "name": "Skiim"
    }
  },
  {
    "id": 12266475,
    "shortDescription": "Lucy Patent Leather high-waisted pencil skirt ",
    "images": [
      {},
      {
        "size": "250",
        "url": image
      }
    ],
    "price": 1194.1849,
    "formattedPrice": "1 194,18 €",
    "brand": {
      "name": "Skiim"
    }
  }
]

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
          entries: products
        })
    }
  ]
}
