import { createContext, useContext, useMemo, useReducer } from 'react'

import { initialState, uiReducer } from './UIReducer'

export const UIContext = createContext(initialState)

export const useUIContext = () => useContext(UIContext)

export const UIContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState)

  const value = useMemo(() => [state, dispatch], [state])

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}
