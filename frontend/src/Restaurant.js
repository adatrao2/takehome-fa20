import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {
  // YOUR CODE GOES BELOW
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        {this.props.name}
        <Counter count={this.props.rating}/>
      </div> 
    )
  }
}

export default App
