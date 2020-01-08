import React from 'react'
import Card from './Card'

export default class Table extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hearts: 0,
            heartCards: [],
            diamonds: 0,
            diamondCards: [],
            spades: 0,
            spadeCards: [],
            clubs: 0,
            clubCards: []
        }
    }

    handleClick = (suit, arr) => {
        const card = this.props.cardSelected
        let cardValue
        if (card != 'empty') {
            if (card.suit === suit.toUpperCase()) {
                if (card.value === 'JACK' | card.value === 'QUEEN' || card.value === 'KING' || card.value === 'ACE') {
                    if (card.value === 'JACK') {
                        cardValue = 11
                    } else if (card.value === 'QUEEN') {
                        cardValue = 12
                    } else if (card.value === 'KING') {
                        cardValue = 13
                    } else {
                        cardValue = 1
                    }
                } else {
                    cardValue = parseInt(card.value, 10)
                }
                if (cardValue - this.state[suit] === 1) {
                    const newCards = this.state[arr]
                    const newSuit = this.state[suit] + 1
                    newCards.push(card)
                    this.props.onMove(card, null)
                    this.props.onUnselect()
                    this.setState({
                        [suit]: newSuit,
                        [arr]: newCards
                    })
                }
            }
        }
    }

    render() {
        let hearts
        if (this.state.hearts === 0) {
            hearts = <div className='empty-cell' onClick={()=>this.handleClick('hearts', 'heartCards')}>hearts</div>
        } else {
            hearts = <img className='empty-cell' src={this.state.heartCards[this.state.heartCards.length-1].image} onClick={()=>this.handleClick('hearts', 'heartCards')}></img>
        }
        let diamonds
        if (this.state.diamonds === 0) {
            diamonds = <div className='empty-cell' onClick={()=>this.handleClick('diamonds', 'diamondCards')}>diamonds</div>
        } else {
            diamonds = <img className='empty-cell' src={this.state.diamondCards[this.state.diamondCards.length-1].image} onClick={()=>this.handleClick('diamonds', 'diamondCards')}></img>
        }
        let spades
        if (this.state.spades === 0) {
            spades = <div className='empty-cell' onClick={()=>this.handleClick('spades', 'spadeCards')}>spades</div>
        } else {
            spades = <img className='empty-cell' src={this.state.spadeCards[this.state.spadeCards.length-1].image} onClick={()=>this.handleClick('spades', 'spadeCards')}></img>
        }
        let clubs
        if (this.state.clubs === 0) {
            clubs = <div className='empty-cell' onClick={()=>this.handleClick('clubs', 'clubCards')}>clubs</div>
        } else {
            clubs = <img className='empty-cell' src={this.state.clubCards[this.state.clubCards.length-1].image} onClick={()=>this.handleClick('clubs', 'clubCards')}></img>
        }
        return (
            <div className='table'>
                <div className='table-container'>
                    {hearts}
                    {diamonds}
                    {spades}
                    {clubs}
                </div>
            </div>
        )
    }
}