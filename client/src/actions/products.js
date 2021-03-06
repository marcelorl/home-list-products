import { createAction } from 'redux-actions'

import axios from '../services/Request'

export const requestProductsFail = createAction('PRODUCTS_FAIL_FETCH')
export const requestProducts = createAction('PRODUCTS_REQUEST_FETCH')
export const requestProductsSuccess = createAction('PRODUCTS_SUCCESS_FETCH')

const dependencies = { axios }

export const fetchProducts = injection => {
  const { axios } = Object.assign({}, dependencies, injection)

  return dispatch => {
    dispatch(requestProducts())

    return axios.get('/products')
      .then(({ data: { entries } }) => {
        const products = entries.map(item => ({
          id: item.id,
          brandName: item.brand.name,
          description: item.shortDescription,
          image: item.images[1].url,
          price: item.price,
          priceFormatted: item.formattedPrice,
          slug: item.slug
        }))

        return dispatch(requestProductsSuccess({ products }))
      })
      .catch(err => dispatch(requestProductsFail(new Error(err))))
  }
}
