import React, { Component } from 'react'

class Comp extends Component {
  state = {
    a: 1
  }
  handleClick = () => {
    setTimeout(() => {
      this.setState({
        a: 2
      })
      console.log(this.state.a)
    })
  }
  render () {
    const {
      a
    } = this.state
    return (
      <div>
        <span>{a}</span>
        <button
          onClick={this.handleClick}
        >
          点击
        </button>
      </div>
    )
  }
}
export default Comp