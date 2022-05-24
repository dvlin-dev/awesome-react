import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useReducer,
} from 'react'

const Context = React.createContext(null as any)

export function Provider({ store, children }) {
  return <Context.Provider value={store}>{children}</Context.Provider>
}

export const connect = (mapStateToProps, mapDispatchToProps) => (
  WrappedComponent
) => (props) => {
  const store = useContext(Context)
  const stateProps = mapStateToProps(store.getState())
  let dispatchProps = { dispatch: store.dispatch }
  if (typeof mapDispatchToProps === 'function') {
    dispatchProps = mapDispatchToProps(store.dispatch)
  } else if (typeof mapDispatchToProps === 'object') {
    dispatchProps = bindActionCreators(
      mapDispatchToProps,
      store.dispatch
    ) as any
  }

  const forceUpdate = useForceUpdate()
  useLayoutEffect(() => {
    forceUpdate()
  }, [store])

  return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />
}
export function bindActionCreators(creators, dispatch) {
  const obj = {}
  for (const key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch)
  }
  return obj
}
function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args))
}
export function useSelector(selctor) {
  const store = useContext(Context)
  const selectedState = selctor(store.getState())

  const forceUpdate = useForceUpdate()

  useLayoutEffect(() => {
    forceUpdate()
  }, [store])

  return selectedState
}
export function useDispatch() {
  debugger
  const store = useContext(Context)
  return store.dispatch
}

// 强制刷新
function useForceUpdate() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0)
  return useCallback(() => forceUpdate(), [])
}
