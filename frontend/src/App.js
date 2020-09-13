import React, { Component } from 'react'
import Instructions from './Instructions'
import Restaurant from './Restaurant'
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [
        {id: 1, name: "Golden Harbor", rating: 10},
        {id: 2, name: "Potbelly", rating: 6},
        {id: 3, name: "Noodles and Company", rating: 8},
      ], 
      inputValue: ""
    }
  }

  submitOnClick = () => {
      console.log(this.state.inputValue)

    this.setState((prevState) => ({restaurants: [...prevState.restaurants, {id: this.state.restaurants[this.state.restaurants.length - 1].id + 1, name: this.state.inputValue, rating: 0}]}))
  }

  updateInputValue(evt) {
    
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Counter count={0}/>
        <Instructions complete={true} />
        {this.state.restaurants.map(x => (
          <Restaurant id={x.id} name={x.name} rating={x.rating} />
        ))}
        <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
        <button onClick={this.submitOnClick}>Submit</button>
      </div>
    )
  }
}

export default App
