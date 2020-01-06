import React from 'react';
import './App.css';
import Board from './components/Board'

URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      deck: {},
      retrieved: false,
      columns: []
    }
  }

  componentDidMount() {
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`).then(res => res.json()).then(res => {
      this.setState({
        deck: res,
        id: res.deck_id,
        retrieved: true,
        cards: res.cards
      })
    })
  }

  handleDraw = () => {
    let cards = this.state.cards
    let colms = []
    let card = []
    for (let i = 1; i <= 7; i++) {
      for (let x = 1; x <= i; x++) {
        card.push(cards.shift())
      }
      colms.push(card)
      this.setState({
        columns: colms
      })
      card = []
    }
    this.setState({
      cards: cards
    })
  }

  handleMove = (cOne, cTwo) => {
    let columns = this.state.columns
    columns.forEach(arr => {
      const length = arr.length
      if (arr[length-1] == cOne) {
        arr.pop()
      } else if (arr[length-1] == cTwo) {
        arr.push(cOne)
      }
      return arr
    })
    console.log(columns)
    this.setState({
      columns: columns
    })
  }

  render() {
    console.log(this.state.columns)
    console.log(this.state.cards)
    if (this.state.retrieved) {
      return (
        <div>
          <Board 
            onDraw={this.handleDraw} 
            columns={this.state.columns}
            onMove={this.handleMove}
          />
        </div>
      )
    } else {
      return (<></>)
    }
  }
}

export default App;
