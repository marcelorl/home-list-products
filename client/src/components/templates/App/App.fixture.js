import App from './App'
import image from './__tests__/test.png'

export default {
  component: App,
  props: {
    products: {
      error: '',
      loading: false,
      list: [
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
    }
  }
}
