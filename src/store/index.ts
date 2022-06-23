import { GlobalState, GameStatus, CharacterDirection, GameCharacter } from '../interfaces/gameState'
import * as Character from '../lib/character'
import { createStore, useSelect, useUpdate } from './lib'

export const PLAYER_IDENTIFIER = 'Player'

export const initialState: GlobalState = {
  gameStatus: GameStatus.notstarted,
  gameStats: {
    fps: 0,
    showFps: false,
  },
  level: {
    width: 800,
    height: 500,
  },
  characters: [
    {
      name: PLAYER_IDENTIFIER,
      size: 15,
      position: { y: 10, x: 10 },
      speed: 100,
      direction: CharacterDirection.UP,
    },
  ],
}

const store = createStore<GlobalState>(initialState)

// Store updates

export const updateGameStatus = (gameStatus: GameStatus) =>
  useUpdate(store, (state) => ({ ...state, gameStatus }))

export const updateFps = (fps: number) =>
  useUpdate(store, (state) => ({ ...state, gameStats: { ...state.gameStats, fps } }))

export const toggleFps = () =>
  useUpdate(store, (state) => ({
    ...state,
    gameStats: { ...state.gameStats, showFps: !state.gameStats.showFps },
  }))

export const updateCharacterPosition = (deltaTime: number) =>
  useUpdate(store, (state) => {
    const updatedCharacterPositions = state.characters.map((c) => {
      return {
        ...c,
        position: Character.calculatePosition(deltaTime, c, state.level),
      }
    })

    return {
      ...state,
      characters: updatedCharacterPositions,
    }
  })

export const updateCharacterDirection = (name: string, direction: CharacterDirection) =>
  useUpdate(store, (state) => {
    return {
      ...state,
      characters: state.characters.reduce((acc, character) => {
        if (character.name === name) {
          return [
            ...acc,
            {
              ...character,
              direction,
            },
          ]
        }

        return acc
      }, [] as GameCharacter[]),
    }
  })

// Selectors

export const selectFrameRate = () => useSelect(store, (state) => state.gameStats.fps)

export const selectShowFps = () => useSelect(store, (state) => state.gameStats.showFps)

export const selectGameStatus = () => useSelect(store, (state) => state.gameStatus)

export const selectGameLevel = () => useSelect(store, (state) => state.level)

export const selectGameCharacters = () => useSelect(store, (state) => state.characters)
