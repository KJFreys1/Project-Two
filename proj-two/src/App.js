import React from 'react';
import './App.css';
URL = 'https://deckofcardsapi.com/api/deck/new/draw/?count=5'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      deck_count: {},
      retrieved: false
    }
  }

  componentDidMount() {
    fetch(URL).then(res => res.json()).then(res => {
      this.setState({
        deck_count: res,
        retrieved: true
      })
    })
  }

  render() {
    console.log(this.state.deck_count)
    if (this.state.retrieved) {
      const playerHand = this.state.deck_count.cards.map(arr => {
        return(
          <div>
            <h1>{arr.code}</h1>
            <img src={arr.image}></img>
          </div>
        )
      })
      return(
        <h1>{playerHand}</h1>
      )
    } else {
      return (<></>)
    }
  }
}

export default App;
