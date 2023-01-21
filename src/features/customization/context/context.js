import { createContext, useContext, useMemo, useReducer } from 'react'

import { customizationActions } from './actions'
import { customizationReducer, initialState } from './reducer'

const CustomizationStateContext = createContext(initialState)
const CustomizationActionsContext = createContext(customizationActions)

function useCustomizationState() {
  const state = useContext(CustomizationStateContext)
  if (typeof state === 'undefined') {
    throw new TypeError(
      'useCustomizationState must be used within a CustomizationContextProvider'
    )
  }
  return state
}

function useCustomizationActions() {
  const actions = useContext(CustomizationActionsContext)
  if (typeof actions === 'undefined') {
    throw new TypeError(
      'useCustomizationActions must be used within a CustomizationContextProvider'
    )
  }
  return actions
}

function useCustomizationContext() {
  return [useCustomizationState(), useCustomizationActions()]
}

function CustomizationContextProvider({ children }) {
  const [state, dispatch] = useReducer(customizationReducer, initialState)
  const actions = useMemo(
    () => customizationActions({ state, dispatch }),
    [state, dispatch]
  )

  return (
    <CustomizationStateContext.Provider value={state}>
      <CustomizationActionsContext.Provider value={actions}>
        {children}
      </CustomizationActionsContext.Provider>
    </CustomizationStateContext.Provider>
  )
}

export {
  CustomizationContextProvider,
  useCustomizationActions,
  useCustomizationContext,
  useCustomizationState
}
