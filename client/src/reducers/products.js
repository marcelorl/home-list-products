import { handleActions } from 'redux-actions'

import {
  requestProducts,
  requestProductsFail,
  requestProductsSuccess
} from '../actions/products'

const INITIAL_STATE = {
  loading: false, list: [], error: ''
}

const reducer = handleActions({
  [requestProducts]: (state, action) => ({
    error: '',
    loading: true,
    list: []
  }),
  [requestProductsFail]: (state, action) => ({
    error: `Error - ${action.payload}`,
    loading: false,
    list: []
  }),
  [requestProductsSuccess]: (state, action) => ({
    error: '',
    loading: false,
    list: action.payload.products
  })
}, INITIAL_STATE)

export default reducer
