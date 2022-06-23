import { FC } from 'react'
import useGameLoop from '../hooks/useGameLoop'
import { selectFrameRate, selectGameStatus, updateFps } from '../store'

const DIMENSIONS = [800, 500]

const GameScreen: FC = () => {
  const frames = selectFrameRate()
  const gameStatus = selectGameStatus()

  useGameLoop({ gameStatus }, ({ fps, deltaTime }) => {
    updateFps(fps)

    if (deltaTime) {
      console.log('Render')
    }
  })

  return (
    <div className="border-2" style={{ width: DIMENSIONS[0], height: DIMENSIONS[1] }}>
      <p>FPS: {frames}</p>
    </div>
  )
}

export default GameScreen
