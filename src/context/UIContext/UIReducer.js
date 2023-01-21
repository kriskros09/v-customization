export const initialState = {
  modal: {
    isOpen: false,
    type: 'default',
    content: null
  },
  preview: false
}
const initModalState = () => initialState

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'modal:open': {
      const { payload } = action
      return {
        ...state,
        modal: {
          isOpen: true,
          type: payload.type,
          content: payload.content
        }
      }
    }
    case 'modal:close': {
      return {
        ...state,
        modal: {
          ...initialState.modal
        }
      }
    }
    case 'screen:preview': {
      return {
        ...state,
        preview: action.payload
      }
    }
    case 'ui:reset': {
      return initModalState()
    }
    default:
      return state
  }
}
