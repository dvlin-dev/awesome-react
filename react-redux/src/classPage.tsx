import { Component } from 'react'
import { connect,bindActionCreators } from './myReactRedux/index'

@connect(
  ({ count }) => ({ count }),

  // (dispatch) => {
  //   let creators = {
  //     ADD: () => dispatch({ type: 'ADD' }),
  //   }
  //   return { dispatch, ...creators }
  // }

  (dispatch: any) => {
    let creators = {
      ADD: () => ({ type: 'ADD' }),
    }
    creators = bindActionCreators(creators, dispatch)
    return { dispatch, ...creators }
  }
)
export default class extends Component {
  render() {
    console.log(this.props)
    const { count, ADD } = this.props
    return (
      <div>
        {count}
        <button onClick={ADD}>增加</button>
      </div>
    )
  }
}
