import React from 'react'
import GameState from './GameState'

function GameOver({ gameState }) {
    switch(gameState) {
        case GameState.inProgress:
            return;
        case GameState.Player_X_wins:
            return <div className='game-over' > X WINS </div>
        case GameState.Player_O_wins:
            return <div className='game-over' > 0 WINS </div>
        case GameState.Draw:
            return <div className='game-over' > DRAW </div>
         default:
            return
            
    }
}

export default GameOver
