import { initialState } from './reducer'

function optionsActions({ state, dispatch }) {
  return {
    // eslint-disable-next-line sonarjs/cognitive-complexity
    update: payload => {
      const updatedState = Object.assign({}, state)
      for (const [key, value] of Object.entries(payload)) {
        if (state[key]) {
          // FREEHAND
          if (Object.keys(payload).includes('freehand')) {
            const existingEntry = state[key].find(
              element => element.id === value.id
            )

            if (existingEntry) {
              // Update existing element
              updatedState[key] = state[key].map(element => {
                if (element.id === value.id) {
                  return { ...element, ...value }
                }

                return element
              })
            } else {
              // Add new element
              updatedState[key] = [...state[key], value]
            }

            updatedState['history'].undoStack = [{ ...state }]
          } else {
            if (!Object.keys(payload).includes(['device', 'method'])) {
              updatedState['history'].undoStack = [{ ...state }]
            }
            // PATTERN AND OTHER STEPS
            updatedState[key] = { ...state[key], ...value }
          }
        }
      }
      // eslint-disable-next-line sonarjs/no-duplicate-string
      dispatch({ type: 'options:update', payload: updatedState })
    },
    updateHistory: () => {
      const updatedState = Object.assign({}, state)
      updatedState['history'].undoStack = [{ ...state }]
      // eslint-disable-next-line sonarjs/no-duplicate-string
      dispatch({ type: 'options:update', payload: updatedState })
    },
    // eslint-disable-next-line sonarjs/cognitive-complexity
    updateWithoutHistory: payload => {
      const updatedState = Object.assign({}, state)

      for (const [key, value] of Object.entries(payload)) {
        if (state[key]) {
          // FREEHAND
          if (Object.keys(payload).includes('freehand')) {
            const existingEntry = state[key].find(
              element => element.id === value.id
            )

            if (existingEntry) {
              // Update existing element
              // eslint-disable-next-line sonarjs/no-identical-functions
              updatedState[key] = state[key].map(element => {
                if (element.id === value.id) {
                  return { ...element, ...value }
                }

                return element
              })
            } else {
              // Add new element
              updatedState[key] = [...state[key], value]
            }
          } else {
            // PATTERN AND OTHER STEPS
            updatedState[key] = { ...state[key], ...value }
          }
        }
      }
      // eslint-disable-next-line sonarjs/no-duplicate-string
      dispatch({ type: 'options:update', payload: updatedState })
    },
    // eslint-disable-next-line sonarjs/cognitive-complexity
    delete: payload => {
      const updatedState = Object.assign({}, state)
      for (const [key, value] of Object.entries(state)) {
        if (state[key]) {
          if (key === 'history') {
            updatedState[key].undoStack = [{ ...state }]
          }
          if (key === 'pattern' && value.id === payload) {
            updatedState[key] = { ...initialState[key] }
          }

          if (key === 'freehand') {
            const index = Object.values(value)
              .map(element => element.id)
              .indexOf(payload)

            if (index > -1) {
              const newFreehandList = [...updatedState[key]]
              newFreehandList.splice(index, 1)
              updatedState[key] = newFreehandList
            }
          }
        }
      }

      dispatch({ type: 'options:delete', payload: updatedState })
    },
    restoreHistory: () => {
      const { history } = state

      const updatedState = {
        ...history.undoStack[0],
        history: {}
      }

      dispatch({ type: 'options:undo', payload: updatedState })
    },

    getColor: payload => {
      const { stepId, index } = payload
      if (stepId === 'freehand' && index !== -1 && index !== null) {
        const { color } = state[stepId][index]
        return color
      } else {
        const { color } = state[stepId]
        return color
      }
    },
    reset: () => dispatch({ type: 'options:reset' }),
    toggleToolbar: () => dispatch({ type: 'options:toggle:toolbar' })
  }
}

export { optionsActions }
