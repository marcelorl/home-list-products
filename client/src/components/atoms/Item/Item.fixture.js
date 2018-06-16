import Item from './Item'
import image from './__tests__/test.png'

export default {
  component: Item,
  props: {
    image: image,
    brandName: 'brandName',
    description: 'description',
    price: 1000,
    priceFormatted: '1000 R$'
  }
}
