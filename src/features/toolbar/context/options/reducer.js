import { devices, methods, toolbarSteps } from '../../constants'

const initialState = {
  [toolbarSteps.DEVICE]: {
    selection: devices.EPOD2PLUS
  },
  [toolbarSteps.METHOD]: {
    selection: methods.PATTERN
  },
  [toolbarSteps.COLOR]: {
    color: {
      selection: [],
      type: undefined,
      settings: undefined
    }
  },
  [toolbarSteps.PATTERN]: {
    selection: undefined,
    color: {
      selection: [],
      type: undefined,
      settings: undefined
    }
  },
  [toolbarSteps.FREEHAND]: [],
  isToolbarVisible: true,
  history: { undoStack: [] }
}

const optionsReducer = (state, action) => {
  switch (action.type) {
    case 'options:update':
      return { ...state, ...action.payload }
    case 'options:delete':
      return { ...state, ...action.payload }
    case 'options:undo':
      return { ...state, ...action.payload }
    case 'options:reset':
      return initialState
    case 'options:toggle:toolbar':
      return { ...state, isToolbarVisible: !state.isToolbarVisible }
    default:
      return state
  }
}

export { initialState, optionsReducer }
