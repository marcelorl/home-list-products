import Item from './Item'

export default {
  component: Item,
  props: {
    image: 'https://cdn-images.farfetch.com/rochas-jacquard-pencil-skirt_12235260_10683272_250.jpg',
    brandName: 'brandName',
    description: 'description',
    price: 1000,
    priceFormatted: '1000 R$'
  }
}
