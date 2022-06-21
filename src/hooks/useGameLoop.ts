import { useEffect, useRef } from 'react'
import { GameStatus } from '../interfaces/gameState'

export interface GameLoopValues {
  deltaTime?: number
  fps: number
}

export interface GameOptions {
  gameStatus: GameStatus
}

export type AnimationFrameCallback = (args: GameLoopValues) => void

const useGameLoop = ({ gameStatus }: GameOptions, callback: AnimationFrameCallback) => {
  const animationFrameRef = useRef<number>()
  const timeRef = useRef<number>()

  const gameLoop = (time: number) => {
    if (timeRef.current !== undefined) {
      const deltaTime = time - timeRef.current
      const fps = Math.round(1 / (deltaTime / 1000))
      callback({ deltaTime, fps })
    }

    timeRef.current = time
    animationFrameRef.current = requestAnimationFrame(gameLoop)
  }

  useEffect(() => {
    switch (gameStatus) {
      case GameStatus.running:
        animationFrameRef.current = requestAnimationFrame(gameLoop)
        break

      default:
        callback({ fps: 0, deltaTime: undefined })
        cancelAnimationFrame(animationFrameRef.current!)
        animationFrameRef.current = undefined
        break
    }

    return () => {
      cancelAnimationFrame(animationFrameRef.current!)
    }
  }, [gameStatus])
}

export default useGameLoop
