import { FC } from 'react'
import { selectFrameRate, selectShowFps } from '../store'

const FpsCounter: FC = () => {
  const showFps = selectShowFps()
  const fps = selectFrameRate()

  return <>{showFps && <p>FPS: {fps}</p>}</>
}

export default FpsCounter
