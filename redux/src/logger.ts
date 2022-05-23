export default function logger({ getState, dispach }) {
  return (next) => (action) => {
    console.log('preState : ', getState())
    console.log(action.type + ' 运行了')
    const returnValue = next(action)
    console.log('nextState : ', getState())
    return returnValue
  }
}
