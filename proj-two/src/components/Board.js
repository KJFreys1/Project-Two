import React from 'react'
import Columns from './Columns'

export default class Board extends React.Component {
    componentDidMount() {
        this.props.onDraw()
    }
    render() {
        return(
            <div className='board'>
                <Columns columns={this.props.columns} />
            </div>
        )
    }
}