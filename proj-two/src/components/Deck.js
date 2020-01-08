import React from 'react'
import Card from './Card'

export default class Deck extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            cards: this.props.cards,
            show: []
        }
    }

    handleFlip = () => {
        this.props.onUnselect()
        const cards = this.state.cards
        const show = this.state.show
        const length = cards.length
        let idx = 3
        if (this.state.cards.length < 3) {
            idx = this.state.cards.length
        }
        if (length > 0) {
            for (let i = 1; i <= 3 && i <= length; i++) {
                show.unshift(cards.pop())
            }
            this.setState({
                cards: cards,
                show: show 
            })
        } else {
            this.setState({
                cards: show,
                show: []
            })
        }
        console.log('idx' + idx)
        this.props.passShow(show, cards, idx)
    }

    render () {
        console.log('in deck show: ')
        console.log(this.state.show)
        let canBeSelected = false
            const showThree = []
            for (let i = 0; i < this.props.cardsShown && i < this.state.show.length; i++) {
                showThree.push(this.state.show[i])
            }
            const showCards = showThree.map((card, idx) => {
                console.log(idx)
                if (idx === this.props.cardsShown - 1) {
                    canBeSelected = true
                }
                return (
                    <Card 
                        card={card}
                        canBeSelected = {canBeSelected}
                        isLast={true}
                        selected={this.props.selected} 
                        onGet={this.props.onGet}
                        onUnselect={this.props.onUnselect} 
                        onBoard={false}
                    />
                )
            })
        let empty = 'hide'
        let hide = ''
        if (this.state.cards.length === 0) {
            hide = 'hide'
            empty = ''
        }
        return (
            <div className='deck'>
                <img className={hide + ' deck-cards'} src='cardback.png' onClick={this.handleFlip}></img>
                <div className={empty + ' empty-deck'} onClick={this.handleFlip}></div>
                <div className='deck-container'>
                    {showCards}
                </div>
            </div>
        )
    }
}