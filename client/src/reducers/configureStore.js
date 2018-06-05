import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

import productsReducer from './products'

const loggerMiddleware = createLogger()

const reducers = combineReducers({
  products: productsReducer
})

const middlewares = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)

const configureStore =
  createStore(
    reducers,
    composeWithDevTools(
      middlewares
    )
  )

export default configureStore
