export default function createStore(reducer: any) {
  let curState: null = null
  let listeners: any[] = []
  const getState = () => {
    return curState
  }
  const dispatch = (action: any) => {
    curState = reducer(curState, action)
    listeners.forEach((listener) => listener())
  }
  const subscribe = (listener: any) => {
    listeners.push(listener)
    return () => {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }
  return {
    getState,
    dispatch,
    subscribe,
  }
}
// anyscript =.=
