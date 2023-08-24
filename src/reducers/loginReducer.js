const initialState = {
  isLoggedIn: false,
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'login': {
      return [
        ...state,
        {
          isLoggedIn: true,
        },
      ]
    }

    default:
      return state
  }
}
