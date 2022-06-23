import { CharacterDirection, GameCharacter, GameLevel, Position } from '../interfaces/gameState'

const checkBoundaries = (position: Position, level: GameLevel, characterSize: number) => {
  if (position.x + characterSize >= level.width) {
    return { ...position, x: 0 }
  }

  if (position.x <= 0) {
    return { ...position, x: level.width - characterSize }
  }

  if (position.y + characterSize >= level.height) {
    return { ...position, y: 0 }
  }

  if (position.y <= 0) {
    return { ...position, y: level.height - characterSize }
  }

  return position
}

export const calculatePosition = (
  deltaTime: number,
  { speed, position, direction, size }: GameCharacter,
  level: GameLevel,
) => {
  const pxPerSecond = speed * (deltaTime / 1000)

  switch (direction) {
    case CharacterDirection.RIGHT:
      return checkBoundaries({ ...position, x: position.x + pxPerSecond }, level, size)

    case CharacterDirection.LEFT:
      return checkBoundaries({ ...position, x: position.x - pxPerSecond }, level, size)

    case CharacterDirection.DOWN:
      return checkBoundaries({ ...position, y: position.y + pxPerSecond }, level, size)

    case CharacterDirection.UP:
      return checkBoundaries({ ...position, y: position.y - pxPerSecond }, level, size)

    default:
      return position
  }
}
