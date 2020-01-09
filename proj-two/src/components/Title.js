import React from 'react'
import {Route, Link} from 'react-router-dom'
import App from './App'
import Instructions from './components/Instructions'

export default function Title() {
    return (
        <main>
            <div className='title-page'>
                <h1 className='title'>Solitaire</h1>
                <Link to='/game'>
                    <div className='start'>Start New Game</div>
                </Link>
                <Link to='/instructions'>
                    <div className='instructions'>How To Play</div>
                </Link>
            </div>
            <Route path='/' exact component={Title} />
            <Route path='/game' exact component={App} />
            <Route path='/instructions' exact component={Instructions} />
        </main>
    )
}