import { Factory } from 'rosie'

import image from './test.png'

export const Product = Factory.define('product')
  .sequence('id')
  .attr('brandName', 'brandName')
  .attr('description', 'this is just a short description')
  .attr('image', image)
  .attr('price', 1000)
  .attr('priceFormatted', () => `1000 R$`)
  .attr('slug', () => 'http://test.com')


export const ProductResponse = Factory.define('productResponse')
  .sequence('id')
  .attr('shortDescription', 'this is just a short description')
  .attr('images', [
    {},
    {
      "size": "250",
      "url": image
    }
  ])
  .attr('price', 1000)

  .attr('formattedPrice', () => `1000 R$`)
  .attr('brand', { name: 'brandName' })
  .attr('slug', 'http://test.com')
