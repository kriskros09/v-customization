import { createContext, useContext, useMemo, useReducer } from 'react'

import { stepsActions } from './actions'
import { initialState, stepsReducer } from './reducer'

const StepsStateContext = createContext(initialState)
const StepsActionsContext = createContext(stepsActions)

function useStepsState() {
  const state = useContext(StepsStateContext)
  if (typeof state === 'undefined') {
    throw new TypeError(
      'useStepsState must be used within a StepsContextProvider'
    )
  }
  return state
}

function useStepsActions() {
  const actions = useContext(StepsActionsContext)
  if (typeof actions === 'undefined') {
    throw new TypeError(
      'useStepsActions must be used within a StepsContextProvider'
    )
  }
  return actions
}

function useStepsContext() {
  return [useStepsState(), useStepsActions()]
}

function StepsContextProvider({ children }) {
  const [state, dispatch] = useReducer(stepsReducer, initialState)
  const actions = useMemo(
    () => stepsActions({ state, dispatch }),
    [state, dispatch]
  )

  return (
    <StepsStateContext.Provider value={state}>
      <StepsActionsContext.Provider value={actions}>
        {children}
      </StepsActionsContext.Provider>
    </StepsStateContext.Provider>
  )
}

export { StepsContextProvider, useStepsContext }
