const initialState = {
  isLoggedIn: false,
  role: 'user',
  username: '',
  password: '',
}

// reducer --?
/**
   what is reducer ?
   reducer is just a plain js function 
   where you can check the action, action has type and payload
   depending on there types we can update the store values

   why we use switch?
   as per the good standers in js we always use switch case if we have 3 or more then 3 conditions

   do we need to use switch case if we have just one condition
   dear maám - you never know when you have to create more cases.
 */
export default function userDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_DETAILS': {
      return {
        ...state,
        role: action?.payload?.role,
        isLoggedIn: action?.payload?.isLoggedIn,
      }
    }
    case 'SIGNOUT': {
      return {
        isLoggedIn: false,
        role: 'user',
        username: '',
        password: '',
      }
    }
    default:
      return state
  }
}
