const canvasActiontypes = {
  CANVAS_UPDATE_STATE: 'canvas:update:state',
  CANVAS_SET_SELECTED_ELEMENT_ID: 'canvas:set:selected:elementId',
  CANVAS_SET_ELEMENT_ID_TODELETE: 'canvas:set:delete:elementId',
  CANVAS_MODIFIERS: 'canvas:set:modifiers',
  CANVAS_RESET_STATE: 'canvas:reset'
}

//const HISTORY_MAX_COUNT = 2

function canvasActions({ dispatch }) {
  return {
    updateModifiers: payload => {
      dispatch({
        type: canvasActiontypes.CANVAS_MODIFIERS,
        payload
      })
    },
    updateCanvasState: payload => {
      dispatch({
        type: canvasActiontypes.CANVAS_UPDATE_STATE,
        payload: payload
      })
    },
    setSelectedElementId: elementId => {
      dispatch({
        type: canvasActiontypes.CANVAS_SET_SELECTED_ELEMENT_ID,
        payload: elementId
      })
    },
    setElementIdToDelete: elementId => {
      dispatch({
        type: canvasActiontypes.CANVAS_SET_ELEMENT_ID_TODELETE,
        payload: elementId
      })
    },
    resetCanvasState: reset => {
      dispatch({
        type: canvasActiontypes.CANVAS_RESET_STATE,
        payload: reset
      })
    }
  }
}

export { canvasActions, canvasActiontypes }
