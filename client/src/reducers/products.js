import { handleActions } from 'redux-actions'

import {
  requestProducts,
  requestProductsFail,
  requestProductsSuccess
} from '../actions/products'

const INITIAL_STATE = {
  loading: false, list: [], error: null
}

const reducer = handleActions({
  [requestProducts]: (state, action) => ({
    loading: true,
    list: []
  }),
  [requestProductsFail]: (state, action) => ({
    error: `Error - ${action.payload}`,
    loading: false
  }),
  [requestProductsSuccess]: (state, action) => ({
    loading: false,
    list: action.payload.products
  })
}, INITIAL_STATE)

export default reducer
