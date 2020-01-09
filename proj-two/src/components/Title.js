import React from 'react'
import { Link} from 'react-router-dom'

export default function Title() {
    return (
        <main>
            <div className='title-page'>
                <h1 className='title'>Solitaire</h1>
                <Link to='/game' className='link'>
                    <div className='start'>Start New Game</div>
                </Link>
                <Link to='/instructions' className='link'>
                    <div className='instructions'>How To Play</div>
                </Link>
            </div>
        </main>
    )
}