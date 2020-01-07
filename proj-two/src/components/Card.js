import React from 'react'

export default class Card extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isHighlight: ''
        }
    }

    onHighlight = () => {
        if (this.props.selected != 'empty') {
            if (this.state.isHighlight === 'highlight') {
                this.setState({
                    isHighlight: ''
                })
                this.props.onUnselect()
            } else {
                if (this.props.canBeSelected) {
                    this.props.onCheck(this.props.card)
                }
            }
        } else {
            this.setState({
                isHighlight: 'highlight'
            })
            this.props.onGet(this.props.card)
        }
    }

    render() {
        if (this.props.isLast) {
            return (
                <img 
                    className={this.state.isHighlight + ' card'} 
                    src={this.props.card.image} 
                    onClick={this.onHighlight}
                ></img>
            )
        } else {
            return (
                <img className='card' src='cardback.png'></img>
            )
        }
    }
}