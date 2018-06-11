import createReduxProxy from 'react-cosmos-redux-proxy'
// We can import app files here
import configureStore from './reducers'

// Read more about configuring Redux in the Redux proxy section below
const ReduxProxy = createReduxProxy({
  createStore: state => configureStore(state)
})

// We ensure a specific proxy order
export default [
  // Not all proxies have options, and often relying on defaults is good enough
  ReduxProxy
]
