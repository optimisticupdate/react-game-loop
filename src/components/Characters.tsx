import { FC } from 'react'
import { selectGameCharacters } from '../store'

const Character: FC = () => {
  const characters = selectGameCharacters()
  return (
    <>
      {characters.map(({ size, position: { y, x }, name }) => (
        <div
          key={name}
          className="absolute block border-2 border-red-600"
          style={{ height: size, width: size, borderRadius: size, top: y, left: x }}
        ></div>
      ))}
    </>
  )
}

export default Character
