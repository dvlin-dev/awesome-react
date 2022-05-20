import { useEffect, useState } from 'react'
import store from './store'
function App() {
  const [count, setCount] = useState(store.getState())
  const unSubscribe = store.subscribe(() => {
    setCount(store.getState())
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
      <div>{count}</div>
      <button onClick={add}>click</button>
    </>
  )
}

export default App
