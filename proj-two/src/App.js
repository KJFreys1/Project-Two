import React from 'react';
import './App.css';
import Board from './components/Board'

URL = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52'
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
    fetch(URL).then(res => res.json()).then(res => {
      this.setState({
        deck: res,
        id: res.deck_id,
        retrieved: true,
        cards: res.cards,
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
    let movedCards = []
    columns.forEach(arr => {
      let faceUp = false
      arr.forEach(card => {
        if (card === cOne) {
          faceUp = true
        }
        if (faceUp === true) {
          movedCards.push(card)
        }
      })
      if (faceUp) {
        for (let i = 0; i < movedCards.length; i++) {
          arr.pop()
        }
      }
    })
    columns.forEach(arr => {
      if (arr[arr.length-1] == cTwo) {
        movedCards.forEach(cards => {
          arr.push(cards)
        })
      }
    })
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
