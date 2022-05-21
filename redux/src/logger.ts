export default function logger({ dispach, getState }) {
  return (next) => (action) => {
    console.log('preState : ', getState())
    console.log(action.type + 'run')
    const returnValue = next(action)
    console.log('nextState : ', getState())
    return returnValue
  }
}
