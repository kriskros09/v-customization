import { createContext, memo, useContext, useMemo, useReducer } from 'react'

import { canvasActions } from './actions'
import { canvasReducer, initialState } from './reducer'

const CanvasStateContext = createContext(initialState)
const CanvasActionsContext = createContext(canvasActions)

function useCanvasState() {
  const state = useContext(CanvasStateContext)
  if (typeof state === 'undefined') {
    throw new TypeError(
      'useCanvasState must be used within a CanvasContextProvider'
    )
  }
  return state
}

function useCanvasActions() {
  const actions = useContext(CanvasActionsContext)
  if (typeof actions === 'undefined') {
    throw new TypeError(
      'useCanvasActions must be used within a CanvasContextProvider'
    )
  }
  return actions
}

function useCanvasContext() {
  return [useCanvasState(), useCanvasActions()]
}

const CanvasContextProvider = memo(function CanvasContextProvider({
  children
}) {
  // const [canvasContextState, canvasContextActions] = useCanvasContext()
  const [state, dispatch] = useReducer(canvasReducer, initialState)
  const actions = useMemo(() => canvasActions({ dispatch }), [dispatch])

  return (
    <CanvasStateContext.Provider value={state}>
      <CanvasActionsContext.Provider value={actions}>
        {children}
      </CanvasActionsContext.Provider>
    </CanvasStateContext.Provider>
  )
})

export {
  CanvasContextProvider,
  useCanvasActions,
  useCanvasContext,
  useCanvasState
}
