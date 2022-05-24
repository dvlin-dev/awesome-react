import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function HookstPage() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  const ADD = useCallback(() => dispatch({ type: 'ADD' }), [])
  return (
    <>
      {count}
      <button onClick={ADD}>增加</button>
    </>
  )
}
