import { GameStatus } from '../interfaces/gameState'

export enum ActionType {
  ChangeGameStatus,
  UpdateFps,
}

export interface ChangeGameStatus {
  type: ActionType.ChangeGameStatus
  payload: GameStatus
}

export const changeGameStatus = (status: GameStatus): ChangeGameStatus => ({
  type: ActionType.ChangeGameStatus,
  payload: status,
})

export interface UpdateFps {
  type: ActionType.UpdateFps
  payload: number
}

export const updateFps = (fps: number): UpdateFps => ({
  type: ActionType.UpdateFps,
  payload: fps,
})

export type Actions = ChangeGameStatus | UpdateFps
