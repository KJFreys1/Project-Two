import React from 'react'
import Card from './Card'
let col = [0, 1, 2, 3, 4, 5, 6]

export default class Columns extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cardSelected: 'empty',
            faceUp: [[],[],[],[],[],[],[]]
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
            this.props.onMove(this.state.cardSelected, card)
            this.setState({
                cardSelected: 'empty'
            })
        }
    }

    render() {
        console.log(this.state.cardSelected)
        let last = false
        const colms = this.props.columns.map((arr, x) => {
            return (
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
                        return (
                            <Card 
                                card={card} 
                                isLast={last}
                                selected={this.state.cardSelected} 
                                onGet={this.handleGetValue}
                                onUnselect={this.handleUnselect} 
                                onCheck={this.handleCheckValue}
                            />
                        )
                    })}
                </div>
            )
        })
        return(
            <h1>{colms}</h1>
        )
    }
}