import { Dispatch, FC, createContext, PropsWithChildren, useReducer, useContext } from 'react'
import { Actions } from './actions'
import { GlobalState, initialState } from './state'
import reducer from './reducer'

const GlobalStateContext = createContext<GlobalState>(initialState)
const GlobalDispatchContext = createContext<Dispatch<Actions>>(() => undefined)

export const GlobalContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>{children}</GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export const useState = () => {
  const context = useContext(GlobalStateContext)
  if (context === undefined) {
    throw new Error('useState must be used within a GlobalStateContext')
  }
  return context
}

export const useDispatch = () => {
  const context = useContext(GlobalDispatchContext)
  if (context === undefined) {
    throw new Error('useDispatch must be used within a GlobalDispatchContext')
  }
  return context
}
