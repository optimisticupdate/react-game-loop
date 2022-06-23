import GameScreen from './components/GameScreen'
import Controls from './components/Controls'
import { FC } from 'react'

const App: FC = () => {
  return (
    <div className="flex flex-col self-stretch h-full">
      <Controls />
      <div className="flex grow pt-6 justify-center">
        <GameScreen />
      </div>
    </div>
  )
}

export default App
