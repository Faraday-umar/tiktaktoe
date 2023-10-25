import React from 'react'
import GameState from './GameState'

function Reset({gameState, onReset}) {

  return (
    <button onClick={onReset} className='reset-button' > RESTART </button>
  )
}

export default Reset
