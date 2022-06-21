import { GameStatus } from '../interfaces/gameState'

export interface GameStats {
  fps: number
}

export interface GlobalState {
  gameStatus: GameStatus
  gameStats: GameStats
}

export const initialState: GlobalState = {
  gameStatus: GameStatus.notstarted,
  gameStats: {
    fps: 0,
  },
}
