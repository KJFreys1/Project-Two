import React from 'react'
import { Link } from 'react-router-dom'

export default function Instructions() {
    return(
        <main>
            <div className='how-to-box'>
                <h1 className='how-to-play'>How To Play</h1>
                <p className='description'>
                    Click on a card to select it and then again on another card to move it.
                    Cards can only move onto another card with an opposing colored suit (ie. 
                    diamonds to clubs or spades, spades to heart or diamond, etc.). Click on 
                    the deck on the left to reveal more cards when stuck. Move cards starting 
                    from Ace over to their respective suit-based pile on the right to remove 
                    them from play and score points. Win the game by clearing the board of all 
                    cards by moving them into their respective piles. The quicker you finish, 
                    the more points you'll score. Careful though, this game is still a work in 
                    progress and due to a natural randomness of probability, not all games are 
                    winnable.
                </p>
                <Link to='/' className='link'>
                    <div className='back'>Title Page</div>
                </Link>
            </div>
        </main>
    )
}