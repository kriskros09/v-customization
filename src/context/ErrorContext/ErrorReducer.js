export const initialState = {
  hasError: {
    error: false,
    content: null
  }
}

export const ErrorReducer = (state = initialState, action) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case 'obj:overlaping': {
      const { payload } = action
      return {
        ...state,
        hasError: {
          error: payload.error,
          content: payload.content
        }
      }
    }
    default:
      return state
  }
}
