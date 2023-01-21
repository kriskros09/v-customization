import { createContext, useContext, useMemo, useReducer } from 'react'

import { optionsActions } from './actions'
import { initialState, optionsReducer } from './reducer'

const OptionsStateContext = createContext(initialState)
const OptionsActionsContext = createContext(optionsActions)

function useOptionsState() {
  const state = useContext(OptionsStateContext)
  if (typeof state === 'undefined') {
    throw new TypeError(
      'useOptionsState must be used within a OptionsContextProvider'
    )
  }
  return state
}

function useOptionsActions() {
  const actions = useContext(OptionsActionsContext)
  if (typeof actions === 'undefined') {
    throw new TypeError(
      'useOptionsActions must be used within a OptionsContextProvider'
    )
  }
  return actions
}

function useOptionsContext() {
  return [useOptionsState(), useOptionsActions()]
}

function OptionsContextProvider({ children }) {
  const [state, dispatch] = useReducer(optionsReducer, initialState)
  const actions = useMemo(
    () => optionsActions({ state, dispatch }),
    [state, dispatch]
  )

  return (
    <OptionsStateContext.Provider value={state}>
      <OptionsActionsContext.Provider value={actions}>
        {children}
      </OptionsActionsContext.Provider>
    </OptionsStateContext.Provider>
  )
}

export {
  OptionsContextProvider,
  useOptionsActions,
  useOptionsContext,
  useOptionsState
}
