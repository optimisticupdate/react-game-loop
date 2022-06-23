export enum GameStatus {
  notstarted = 'not-started',
  running = 'running',
  paused = 'paused',
}

export interface GameStats {
  fps: number
  showFps: boolean
}

export interface Position {
  x: number
  y: number
}

export enum CharacterDirection {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export interface GameCharacter {
  name: string
  size: number
  position: Position
  speed: number
  direction: CharacterDirection
}

export interface GameLevel {
  height: number
  width: number
}

export interface GlobalState {
  gameStatus: GameStatus
  gameStats: GameStats
  level: GameLevel
  characters: GameCharacter[]
}
