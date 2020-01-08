import React from 'react'
import Card from './Card'
import Deck from './Deck'
import Table from './Table'
let col = [0, 1, 2, 3, 4, 5, 6]

export default class Columns extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cardSelected: 'empty'
        }
    }

    handleGetValue = (card) => {
        this.setState({
            cardSelected: card
        })
    }

    handleUnselect = () => {
        this.setState({
            cardSelected: 'empty'
        })
    }

    handleCheckValue = (card) => {
        console.log('checking')
        console.log(card)
        console.log(this.state.cardSelected)
        let cardOne
        let cardTwo
        if (this.state.cardSelected.value === 'JACK' | this.state.cardSelected.value === 'QUEEN' || this.state.cardSelected.value === 'KING' || this.state.cardSelected.value === 'ACE') {
            if (this.state.cardSelected.value === 'JACK') {
                cardOne = 11
            } else if (this.state.cardSelected.value === 'QUEEN') {
                cardOne = 12
            } else if (this.state.cardSelected.value === 'KING') {
                cardOne = 13
            } else {
                cardOne = 1
            }
        } else {
            cardOne = parseInt(this.state.cardSelected.value, 10)
        }
        if (card.value === 'JACK' | card.value === 'QUEEN' || card.value === 'KING' || card.value === 'ACE') {
            if (card.value === 'JACK') {
                cardTwo = 11
            } else if (card.value === 'QUEEN') {
                cardTwo = 12
            } else if (card.value === 'KING') {
                cardTwo = 13
            } else {
                cardTwo = 1
            }
        } else {
            cardTwo = parseInt(card.value, 10)
        }
        if (cardTwo - cardOne === 1) {
            if ((this.state.cardSelected.suit === 'DIAMONDS' || this.state.cardSelected.suit === 'HEARTS') && (card.suit === 'CLUBS' || card.suit ==='SPADES')) {
                this.props.onMove(this.state.cardSelected, card)
                this.setState({
                    cardSelected: 'empty'
                })
            } else if ((this.state.cardSelected.suit === 'CLUBS' || this.state.cardSelected.suit === 'SPADES') && (card.suit === 'HEARTS' || card.suit ==='DIAMONDS')) {
                this.props.onMove(this.state.cardSelected, card)
                this.setState({
                    cardSelected: 'empty'
                })
            }
        }
    }

    checkKing = (idx) => {
        if (this.state.cardSelected.value === 'KING') {
            this.props.onMove(this.state.cardSelected, idx)
            this.handleUnselect()
        }
    }

    checkAce = () => {
        if (this.state.cardSelected.value === 'ACE') {

        }
    }

    render() {
        console.log(this.state.cardSelected)
        let last = false
        let canBeSelected = false
        const colms = this.props.columns.map((arr, x) => {
            let hide = 'hide'
            if (arr.length === 0) {
                hide = ''
            }
            return (
                <>
                    <div className='column'>
                        {arr.map((card, i) => {
                            if (arr.length < col[x] + 1) {
                                col[x] = arr.length - 1
                            }
                            if (i >= col[x]) {
                                last = true
                            } else {
                                last = false
                            }
                            if (i === arr.length-1) {
                                canBeSelected = true
                            } else {
                                canBeSelected = false
                            }
                            return (
                                <Card 
                                    card={card} 
                                    canBeSelected = {canBeSelected}
                                    isLast={last}
                                    selected={this.state.cardSelected} 
                                    onGet={this.handleGetValue}
                                    onUnselect={this.handleUnselect} 
                                    onCheck={this.handleCheckValue}
                                    onBoard={true}
                                />
                            )
                        })}
                    </div>
                    <div className={hide + ' empty-col'} onClick={()=>this.checkKing(x)}></div>
                </>
            )
        })
        return(
            <>
                <Deck 
                    cardsShown={this.props.cardsShown}
                    passShow={this.props.passShow}
                    cards={this.props.cards}
                    selected={this.state.cardSelected}
                    onGet={this.handleGetValue}
                    onUnselect={this.handleUnselect} 
                />
                <div className='column-container'>
                    <div>{colms}</div>
                </div>
                <Table 
                    cardSelected={this.state.cardSelected}
                    onMove={this.props.onMove}
                    onUnselect={this.handleUnselect}
                />
            </>
        )
    }
}