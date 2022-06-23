import { FC } from 'react'
import useGameLoop from '../hooks/useGameLoop'
import { useWithKeyboardControls } from '../hooks/useWithKeyboardControls'
import { selectGameLevel, selectGameStatus, updateCharacterPosition, updateFps } from '../store'
import Characters from './Characters'
import FpsCounter from './FpsCounter'

const GameScreen: FC = () => {
  const gameStatus = selectGameStatus()
  const { width, height } = selectGameLevel()

  useWithKeyboardControls(gameStatus)

  useGameLoop({ gameStatus }, ({ fps, deltaTime }) => {
    updateFps(fps)

    if (deltaTime) {
      updateCharacterPosition(deltaTime)
    }
  })

  return (
    <div className="border-2 relative" style={{ width, height }}>
      <FpsCounter />
      <Characters />
    </div>
  )
}

export default GameScreen
