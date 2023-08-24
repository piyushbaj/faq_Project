const initialState = {
  isLoading: false,
}

export default function loaderReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOADING': {
      return { isLoading: action.isLoading }
    }
    default:
      return state
  }
}
