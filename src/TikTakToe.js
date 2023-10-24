import React, {useState, useEffect} from 'react'
import Board from './Board'
import GameOver from './GameOver'
import GameState from './GameState'

const PLAYER_X = "X"
const PLAYER_O = "O"


const winningCombinations = [
  //Rows
  { combo: [0, 1, 2],  strikeClass: "strike-row-1" },
  { combo: [3, 4, 5],  strikeClass: "strike-row-2" },
  { combo: [6, 7, 8],  strikeClass: "strike-row-3" },

  //columns 
  { combo: [0, 3, 6],  strikeClass: "strike-cloumn-1" },
  { combo: [1, 4, 7],  strikeClass: "strike-cloumn-2" },
  { combo: [2, 5, 8],  strikeClass: "strike-cloumn-3" },

  //Diagonals
  { combo: [0, 4, 8],  strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6],  strikeClass: "strike-diagonal-2" }
]

 function checkWinner(tiles, setStrikeClass, setGameState) {
  for (const { combo, strikeClass } of winningCombinations) {
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];

    if (tileValue1 !== null && tileValue1 === tileValue2 && tileValue1 === tileValue3 )  {
      setStrikeClass(strikeClass);

      if (tileValue1 === PLAYER_X) {
        setGameState(GameState.Player_X_wins)
      } else {
        setGameState(GameState.Player_O_wins)
      }
    }

    
  }

  const areEveryTilesFilled = tiles.every((tile) => tile !== null );
  if(areEveryTilesFilled) {
    setGameState(GameState.Draw)
  }
}


function TikTakToe() {

  const [tiles, setTiles] =useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);

useEffect (() => {
  checkWinner(tiles, setStrikeClass, setGameState)
}, [tiles])

  const handleTileClick = (index) => {

    if (tiles[index] !== null ) {
      return;
    }

    const newTiles = {...tiles}
    newTiles[index] = playerTurn;
    setTiles(newTiles);

    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O)
    } else {
      setPlayerTurn(PLAYER_X)
    }
  }

  return ( 
    <div>
      <h1> Tic Tac Toe </h1>
    <Board strikeClass={strikeClass} tiles={tiles} playerTurn={playerTurn}  onTileClick = {handleTileClick}/>
    <GameOver gameState={gameState}/>
    </div>
  )
}

export default TikTakToe
