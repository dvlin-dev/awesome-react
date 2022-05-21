import compose from './compose'

export default function applyMiddleware(...middlewares) {
  return (createStore) => (reducer) => {
    const store = createStore(reducer)
    let dispatch = store.dispatch

    const midApi = {
      getState: store.getState,
      // 不使用全局 store.dispach 防止 middeleware 污染全局状态
      dispatch: (action, ...args) => dispatch(action, ...args),
    }
    // 让每个 middleware 都能拿到 store 的控制权
    const mindlewareChain = middlewares.map((minddleware) =>
      minddleware(midApi)
    )
    // super dispatch
    dispatch = compose(...mindlewareChain)(store.dispatch)

    return { ...store, dispatch }
  }
}
