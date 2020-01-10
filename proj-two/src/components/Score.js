import React from 'react'
import { Link } from 'react-router-dom'

export default class Score extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            timer: '0.0',
            display: '0:00.0',
            minute: 0
        }
    }

    componentDidMount() {
        this.setState({
            timeFunc: setInterval(() => this.startTimer(), 100)
        })
    }

    startTimer = () => {
        let space = ''
        let minute = this.state.minute
        let newTimer = Math.round(this.state.timer * 10 + 1) / 10
        if (newTimer < 10) {
            space = '0'
        }
        if (newTimer % 1 === 0) {
            newTimer = newTimer + '.0'
        }
        if (newTimer === '60.0') {
            minute += 1
            newTimer = '0.0'
        }
        this.setState({
            timer: newTimer,
            display: `${minute}:${space}${newTimer}`,
            minute: minute,
        })
        
    }

    stopTimer = () => {
        clearInterval(this.state.timeFunc)
        this.setState({
            timeFunc: false
        })
    }

    restartTimer = () => {
        if (!this.state.timeFunc) {
            this.setState({
                timeFunc: setInterval(() => this.startTimer(), 100)
            })
        }
    }

    render() {
        return (
            <div className='score'>
                <div className='score-flex'>
                    <div className='timer'>
                        <h1>Time: {this.state.display}</h1>
                    </div>
                    <div className='score-box'>
                        <h1>Score: {this.props.score}</h1>
                    </div>
                    <div className='new-deck'>
                        <Link to='/' className='link-score'>
                            <h1>Title Page</h1>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}