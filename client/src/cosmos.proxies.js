import createReduxProxy from 'react-cosmos-redux-proxy'
import createXhrProxy from 'react-cosmos-xhr-proxy'

import configureStore from './reducers';

const ReduxProxy = createReduxProxy({
  createStore: state => configureStore(state)
})

export default [
  ReduxProxy,
  createXhrProxy()
]
