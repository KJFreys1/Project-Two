import React from 'react'
import Columns from './Columns'
import Score from './Score'

export default class Board extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            score: 0,
            deduct: true
        }
    }

    componentDidMount() {
        this.props.onDraw()
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
        console.log('columns')
        console.log(this.props.columns)
        return(
            <div className='page'>
                <div className='board'>
                    <Score 
                        score={this.state.score}
                    />
                    <Columns 
                        cardsShown={this.props.cardsShown}
                        passShow={this.props.passShow}
                        columns={this.props.columns} 
                        onMove={this.props.onMove}
                        cards={this.props.cards}
                        addScore={this.addScore}
                    />
                </div>
            </div>
        )
    }
}