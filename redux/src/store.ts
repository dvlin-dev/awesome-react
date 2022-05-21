import { createStore, applyMiddleware } from './myRedux'
import thunk from 'redux-thunk'
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

const store = createStore(reducer, applyMiddleware(thunk))
export default store
