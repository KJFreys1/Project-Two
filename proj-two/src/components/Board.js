import React from 'react'
import Columns from './Columns'
import Deck from './Deck'

export default class Board extends React.Component {
    componentDidMount() {
        this.props.onDraw()
    }

    render() {
        return(
            <div className='board'>
                <div className='score'></div>
                <Columns 
                    cardsShown={this.props.cardsShown}
                    passShow={this.props.passShow}
                    columns={this.props.columns} 
                    onMove={this.props.onMove}
                    cards={this.props.cards}
                />
                <div className='table'></div>
            </div>
        )
    }
}