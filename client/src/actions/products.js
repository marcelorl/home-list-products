import { createAction } from 'redux-actions'

import axios from '../services/Request'

export const requestProductsFail = createAction('PRODUCTS_FAIL_FETCH')
export const requestProducts = createAction('PRODUCTS_REQUEST_FETCH')
export const requestProductsSuccess = createAction('PRODUCTS_SUCCESS_FETCH')

const dependencies = { axios }

export const fetchProducts = injection => {
  const { axios } = { ...dependencies, injection }

  return dispatch => {
    dispatch(requestProducts())

    return axios.get('/products')
      .then(({ data: { entries } }) => dispatch(requestProductsSuccess({ products: entries })))
      .catch(err => dispatch(requestProductsFail(new Error(err))))
  }
}
