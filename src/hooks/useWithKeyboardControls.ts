import { useEffect } from 'react'
import { CharacterDirection, GameStatus } from '../interfaces/gameState'
import { PLAYER_IDENTIFIER, updateCharacterDirection } from '../store'

const KEY_MAP = [
  {
    keys: ['ArrowUp', 'w'],
    action: () => updateCharacterDirection(PLAYER_IDENTIFIER, CharacterDirection.UP),
  },
  {
    keys: ['ArrowDown', 's'],
    action: () => updateCharacterDirection(PLAYER_IDENTIFIER, CharacterDirection.DOWN),
  },
  {
    keys: ['ArrowLeft', 'a'],
    action: () => updateCharacterDirection(PLAYER_IDENTIFIER, CharacterDirection.LEFT),
  },
  {
    keys: ['ArrowRight', 'd'],
    action: () => updateCharacterDirection(PLAYER_IDENTIFIER, CharacterDirection.RIGHT),
  },
]

export const useWithKeyboardControls = (gameStatus: GameStatus) => {
  const onKeyPress = (e: KeyboardEvent) => {
    const match = KEY_MAP.find((option) => option.keys.includes(e.key))

    if (match) {
      match.action()
    }
  }

  const removeKeylistener = () => document.removeEventListener('keydown', onKeyPress)

  useEffect(() => {
    switch (gameStatus) {
      case GameStatus.running:
        document.addEventListener('keydown', onKeyPress)
        break

      default:
        removeKeylistener()
        break
    }

    return () => {
      removeKeylistener()
    }
  }, [gameStatus])
}
