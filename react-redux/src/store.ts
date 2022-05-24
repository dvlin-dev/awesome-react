import { legacy_createStore as createStore,combineReducers } from 'redux'

function reducer(state = 0, { type }) {
  switch (type) {
    case 'ADD':
      return state + 1
      break

    default:
      return state
      break
  }
}

const store = createStore(combineReducers({count:reducer}))
export default store
