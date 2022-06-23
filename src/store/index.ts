import { GlobalState, GameStatus } from '../interfaces/gameState'
import { createStore, useSelect, useUpdate } from './lib'

export const initialState: GlobalState = {
  gameStatus: GameStatus.notstarted,
  gameStats: {
    fps: 0,
  },
}

const store = createStore<GlobalState>(initialState)

// Store updates

export const updateGameStatus = (gameStatus: GameStatus) =>
  useUpdate(store, (state) => ({ ...state, gameStatus }))

export const updateFps = (fps: number) =>
  useUpdate(store, (state) => ({ ...state, gameStats: { ...state.gameStats, fps } }))

// Selectors

export const selectFrameRate = () => useSelect(store, (state) => state.gameStats.fps)

export const selectGameStatus = () => useSelect(store, (state) => state.gameStatus)
