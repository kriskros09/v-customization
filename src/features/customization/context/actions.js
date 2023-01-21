import { customizationModes } from './reducer'

const customizationActiontypes = {
  TOGGLE_MODE: 'customization:toggle:mode',
  DOWNLOAD_STATUS: 'customization:status:download',
  SAVE_STATUS: 'customization:status:save'
}

function customizationActions({ state, dispatch }) {
  return {
    toggleCustomizationMode: () => {
      const payload =
        state.mode === customizationModes.DESIGN
          ? customizationModes.RENDER
          : customizationModes.DESIGN
      dispatch({
        type: customizationActiontypes.TOGGLE_MODE,
        payload
      })
    },
    resetCustomization: () => {
      return dispatch({
        type: 'customization:reset',
        payload: !state.shouldReset
      })
    },
    initDownload: () => {
      return dispatch({
        type: customizationActiontypes.DOWNLOAD_STATUS,
        payload: !state.download
      })
    },
    saveCustomization: () => {
      return dispatch({
        type: customizationActiontypes.SAVE_STATUS,
        payload: !state.download
      })
    }
  }
}

export { customizationActions, customizationActiontypes }
