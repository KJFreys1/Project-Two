import React from 'react'
import Columns from './Columns'
import Score from './Score'

URL = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52'
export default class Board extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            score: 0,
            deduct: true,
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
          this.handleDraw()
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
        columns.forEach((arr, i) => {
          if (arr[arr.length-1] === cTwo || i === cTwo) {
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

    addScore = () => {
        let newScore = this.state.score + 20
        let deduct = true
        if (this.state.deduct === true) {
            setTimeout(() => this.deductScore(), 15000)
            deduct = false
        }
        this.setState({
            score: newScore,
            deduct: deduct
        })
    }

    deductScore = () => {
        let newScore = this.state.score - 5
        let deduct = true
        if (newScore != 0) {
            deduct = false
            setTimeout(() => this.deductScore(), 15000)
        } 
        this.setState({
            score: newScore,
            deduct: deduct
        })
    }

    render() {
        if (this.state.retrieved) {
            return(
                <div className='page'>
                    <div className='board'>
                        <Score 
                            score={this.state.score}
                        />
                        <Columns 
                            cardsShown={this.state.cardsShown}
                            passShow={this.passShow}
                            columns={this.state.columns} 
                            onMove={this.handleMove}
                            cards={this.state.cards}
                            addScore={this.addScore}
                        />
                    </div>
                </div>
            )
        } else {
            return(<></>)
        }
    }
}