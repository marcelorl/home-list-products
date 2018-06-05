import { handleActions } from 'redux-actions'

import {
  requestProducts,
  requestProductsFail,
  requestProductsSuccess
} from '../actions/products'

const INITIAL_STATE = {
  loading: false, data: null, error: ''
}

const reducer = handleActions({
  [requestProducts]: (state, action) => ({
    error: '',
    loading: true,
    data: null
  }),
  [requestProductsFail]: (state, action) => ({
    error: `Error - ${action.error}`,
    loading: false,
    data: {}
  }),
  [requestProductsSuccess]: (state, action) => ({
    error: '',
    loading: false,
    data: action.payload.products
  })
}, INITIAL_STATE)

export default reducer
