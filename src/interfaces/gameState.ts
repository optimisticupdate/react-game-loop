export enum GameStatus {
  notstarted = 'not-started',
  running = 'running',
  paused = 'paused',
}

export interface GameStats {
  fps: number
}

export interface GlobalState {
  gameStatus: GameStatus
  gameStats: GameStats
}
