import React, { Component } from 'react'

class Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
      b: 1
    }
  }

  handleClick = () => {
    this.setState({
      a: 2
    })
  }

  render () {
    const {
      a,
      b
    } = this.state
    return (
      <div>
        <p>贝壳</p>
        <ul>
          <li>供应链</li>
          <li>工长端</li>
        </ul>
      </div>
    )
  }
}

export default Comp