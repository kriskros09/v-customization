import { customizationActiontypes } from './actions'

export const customizationModes = {
  DESIGN: 'design',
  RENDER: 'render'
}

export const initialState = {
  mode: customizationModes.DESIGN,
  shouldReset: false,
  download: false,
  save: false
}

function customizationReducer(state = initialState, action) {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case customizationActiontypes.TOGGLE_MODE:
      return {
        ...state,
        mode: action.payload
      }
    case 'customization:reset':
      return {
        ...state,
        shouldReset: action.payload
      }
    case customizationActiontypes.DOWNLOAD_STATUS:
      return {
        ...state,
        download: action.payload
      }
    case customizationActiontypes.SAVE_STATUS:
      return {
        ...state,
        save: action.payload
      }
    default:
      return state
  }
}

export { customizationReducer }
