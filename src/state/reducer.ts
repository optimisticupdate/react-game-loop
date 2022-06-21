import { Actions, ActionType } from './actions'
import { GlobalState } from './state'

const reducer = (state: GlobalState, action: Actions): GlobalState => {
  switch (action.type) {
    case ActionType.ChangeGameStatus:
      return {
        ...state,
        gameStatus: action.payload,
      }

    case ActionType.UpdateFps:
      return {
        ...state,
        gameStats: { fps: action.payload },
      }

    default:
      return state
  }
}

export default reducer
