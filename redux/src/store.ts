import logger from './logger'
import { createStore, applyMiddleware, combineReducers } from './myRedux'

import thunk from './thunk'
function reducer(state = 0, { type }) {
  switch (type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
function reducer1(state = 0, { type }) {
  switch (type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(
  combineReducers({ count: reducer, count1: reducer1 }),
  applyMiddleware(thunk, logger)
)
export default store
