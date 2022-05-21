export default function createStore(reducer) {
  let curState
  let listeners: any[] = []
  const getState = () => {
    return curState
  }
  const dispatch = (action) => {
    curState = reducer(curState, action)
    listeners.forEach((listener) => listener())
  }

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }
  dispatch({ type: 'REDUX/INIT' })

  return {
    getState,
    dispatch,
    subscribe,
  }
}
// anyscript =.=
