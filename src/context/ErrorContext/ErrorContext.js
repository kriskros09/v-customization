import { createContext, useContext, useMemo, useReducer } from 'react'

import { ErrorReducer, initialState } from './ErrorReducer'

export const ErrorContext = createContext(initialState)

export const useErrorContext = () => useContext(ErrorContext)

export const ErrorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ErrorReducer, initialState)

  const value = useMemo(() => [state, dispatch], [state])

  return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
}
