import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const GameDisplay = () => {
    let  gameStore = useSelector(store=>store.gameStore)
    let game = gameStore.game
    let player = gameStore.player

    let [gameName, setGame] = useState('')
    let [playerName, setPlayer] = useState('')

    let dispatch = useDispatch()

  return (
    <>
    <h1>Game:{game} </h1>
    <input type='text'
    onChange={e=> setGame(e.target.value)}
    />
    <button onClick={()=>dispatch({type:"Update_game", payload: gameName})}
    >Update Game</button>

    <h1>Player:{player} </h1>
    <input type='text'
    onChange={e=> setPlayer(e.target.value)}
    
    />
    <button onClick={()=>dispatch({type:"Update_player", payload: playerName})}
    >Update Player</button>
    </>

  )
}

export default GameDisplay