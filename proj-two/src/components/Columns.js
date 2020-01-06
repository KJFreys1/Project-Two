import React from 'react'
import Card from './Card'

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

    handleCheckValue = (card) => {
        console.log('checking')
        let cardOne = parseInt(this.state.cardSelected.value, 10)
        let cardTwo = parseInt(card.value, 10)
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
        let index = -1
        const colms = this.props.columns.map(arr => {
            let colLength = arr.length - 1
            index++
            return (
                <div className='column'>
                    {arr.map((card, i) => {
                        if (i >= index || i === colLength) {
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