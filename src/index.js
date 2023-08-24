import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
import AppRouter from './router'
import { PersistGate } from 'redux-persist/integration/react'
import store from './store'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store)
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
reportWebVitals()
