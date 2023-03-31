// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncreament = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been Clicked<span className="counter"> {count} </span>
          times
        </h1>
        <p className="note">Click the button to increase the count!</p>
        <div>
          <button
            className="click-btn"
            id="clickMe"
            type="button"
            onClick={this.onIncreament}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
