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
      columns: [],
      show: [],
      cardsShown: 0
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

  passShow = (show, cards, idx) => {
    this.setState({
      show: show,
      cards: cards,
      cardsShown: idx
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
//cOne moves, cTwo stays
  handleMove = (cOne, cTwo) => {
    console.log('moving')
    const columns = this.state.columns
    const show = this.state.show
    const movedCards = []
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
    let cardsShown = this.state.cardsShown
    if (show[cardsShown - 1] === cOne) {
      console.log('success')
      movedCards.push(show[cardsShown - 1])
      show.splice(cardsShown - 1, 1)
      cardsShown--
    }
    columns.forEach(arr => {
      if (arr[arr.length-1] === cTwo) {
        movedCards.forEach(cards => {
          arr.push(cards)
        })
      }
    })
    this.setState({
      columns: columns,
      show: show,
      cardsShown: cardsShown
    })
  }

  render() {
    console.log('deck left: ')
    console.log(this.state.cards)
    console.log('cards shown: ')
    console.log(this.state.show)
    console.log(this.state.cardsShown)
    if (this.state.retrieved) {
      return (
        <div>
          <Board 
            cardsShown={this.state.cardsShown}
            passShow={this.passShow}
            onDraw={this.handleDraw} 
            columns={this.state.columns}
            onMove={this.handleMove}
            cards={this.state.cards}
          />
        </div>
      )
    } else {
      return (<></>)
    }
  }
}

export default App;