import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import loginReducer from './reducers/loginReducer'
import userDetailsReducer from './reducers/userDetailsReducer'
import loaderReducer from './reducers/loader'

const persistConfig = {
  key: 'root',
  storage: storage,
  // blacklist: ['apiProductSlice'],
  whitelist: ['userDetails'],
}
export const rootReducers = combineReducers({
  login: loginReducer,
  userDetails: userDetailsReducer,
  loader: loaderReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducers)
const store = configureStore({
  reducer: persistedReducer,
})
export default store
