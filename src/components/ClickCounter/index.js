import {Component} from 'react'
import './index.css'

class counter extends Component {
  state = {count: 0}

  Increment = () => {
    this.setState(previous => ({count: previous.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main">
        <h1 className="head">
          The Button has been clicked <br />
          <span className="span">{count}</span> times
        </h1>
        <p>Click the button to increase the count</p>
        <button className="but" type="button" onClick={this.Increment}>
          click me
        </button>
      </div>
    )
  }
}
export default counter
