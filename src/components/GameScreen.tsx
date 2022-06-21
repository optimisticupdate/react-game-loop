import { FC } from 'react'
import useGameLoop from '../hooks/useGameLoop'
import { updateFps } from '../state/actions'
import { useDispatch, useState } from '../state/context'

const DIMENSIONS = [800, 500]

const GameScreen: FC = () => {
  const state = useState()
  const dispatch = useDispatch()

  useGameLoop({ gameStatus: state.gameStatus }, ({ fps, deltaTime }) => {
    dispatch(updateFps(fps))

    if (deltaTime) {
      console.log('Render')
    }
  })

  return (
    <div className="border-2" style={{ width: DIMENSIONS[0], height: DIMENSIONS[1] }}>
      <p>FPS: {state.gameStats.fps}</p>
    </div>
  )
}

export default GameScreen
