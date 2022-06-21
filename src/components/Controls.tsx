import { FC } from 'react'
import { GameStatus } from '../interfaces/gameState'
import { changeGameStatus } from '../state/actions'
import { useDispatch } from '../state/context'

const Controls: FC = () => {
  const dispatch = useDispatch()

  return (
    <div className="flex justify-center">
      <button
        className="border-2 p-1"
        onClick={() => dispatch(changeGameStatus(GameStatus.running))}
      >
        Start Game
      </button>
      <button
        className="border-2 p-1"
        onClick={() => dispatch(changeGameStatus(GameStatus.notstarted))}
      >
        Stop Game
      </button>
    </div>
  )
}

export default Controls
