import { dummyStateDesktop, dummyStateLaptod } from '../dummyCanvasData'
import { canvasActiontypes } from './actions'

export const initialState = {
  history: {
    undoStack: [], // store previous canvas states
    redoStack: [] //  TODO: maybe not needed / store undone canvas states
  },
  initialState: null, // first currentState for app(load saved customizations in the future)
  currentState: {}, // current canvas state as canvas.toJSON(),
  currentDimension: null, // canvas dimension / info when serialize as canvas.toJSON(),
  savedDimension: null, //  TODO: maybe not needed
  modifiers: {
    hasInitialized: false,
    canAddElements: false,
    canSetColor: false,
    orientationMode: null,
    resize: false,
    canRestoreHistory: false,
    canFreedraw: false
  },
  selectedElementId: null, // current selected element on canvas
  elementIdToDelete: null // element to delete fronm canvas
}

function canvasReducer(state = initialState, action) {
  switch (action.type) {
    case canvasActiontypes.CANVAS_MODIFIERS: {
      const { payload } = action
      return {
        ...state,
        modifiers: {
          ...state.modifiers,
          ...payload
        }
      }
    }
    case canvasActiontypes.CANVAS_UPDATE_STATE:
      return {
        ...state,
        ...action.payload
      }
    case canvasActiontypes.CANVAS_SET_SELECTED_ELEMENT_ID:
      return {
        ...state,
        selectedElementId: action.payload
      }
    case canvasActiontypes.CANVAS_SET_ELEMENT_ID_TODELETE:
      return {
        ...state,
        elementIdToDelete: action.payload
      }
    case canvasActiontypes.CANVAS_RESET_STATE:
      return initialState
    default:
      return state
  }
}

export { canvasReducer }
