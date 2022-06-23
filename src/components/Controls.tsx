import { FC } from 'react'
import { GameStatus } from '../interfaces/gameState'
import { updateGameStatus } from '../store'

const Controls: FC = () => {
  return (
    <div className="flex justify-center">
      <button className="border-2 p-1" onClick={() => updateGameStatus(GameStatus.running)}>
        Start Game
      </button>
      <button className="border-2 p-1" onClick={() => updateGameStatus(GameStatus.notstarted)}>
        Stop Game
      </button>
    </div>
  )
}

export default Controls
