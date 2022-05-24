import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

@connect(
  ({ count }) => ({ count }),

  // (dispatch) => {
  //   let creators = {
  //     ADD: () => dispatch({ type: 'ADD' }),
  //   }
  //   return { dispatch, ...creators }
  // }

  (dispatch) => {
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
