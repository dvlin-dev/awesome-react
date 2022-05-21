import { useEffect, useState } from 'react'
import store from './store'
function App() {
  const [count, setCount] = useState(-1)
  const unSubscribe = store.subscribe(() => {
    setCount(Math.random()) // 起到强制更新的作用
  })
  const add = () => {
    store.dispatch({ type: 'INCREMENT' })
  }
  useEffect(() => {
    return () => {
      unSubscribe()
    }
  })
  return (
    <>
      <div>{store.getState()}</div>
      <div>{count}</div>
      <button onClick={add}>click</button>
    </>
  )
}

export default App
