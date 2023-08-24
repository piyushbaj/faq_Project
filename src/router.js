import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './screens/coldstate/login/login'
import Protected from './shared/protected'
import { useSelector } from 'react-redux'
import Dashboard from './screens/hotState/dashboard/dashboard'
import HomePage from './screens/hotState/home/home'
import NotFoundPage from './screens/coldstate/notFoundPage'
import LoaderComponent from './components/loader/loader'
import Registration from './screens/coldstate/registration/registration'
export default function AppRouter() {
  const [isSignedIn, setIsSignedIn] = useState(null)
  const userDetails = (state) => state.userDetails
  const userState = useSelector(userDetails)
  useEffect(() => {
    setIsSignedIn(userState.isLoggedIn)
    console.log('state ', userState)
    if (userState) {
      // navigate('/dashboard')
    }
  }, [userState])

  return (
    <BrowserRouter>
      {/* we can create some common component here to show common UI Eg- Header and etc...*/}
      <LoaderComponent />
      <Routes>
        <Route
          exact
          path="/"
          element={<Login isLoggedIn={userState.isLoggedIn} />}
        />
        <Route exact path="/signup" element={<Registration />} />
        <Route
          path="/dashboard"
          element={
            <Protected isSignedIn={userState.isLoggedIn}>
              {userState.role === 'admin' ? <Dashboard /> : <NotFoundPage />}
            </Protected>
          }
        />
        <Route
          path="/home"
          element={
            <Protected isSignedIn={userState.isLoggedIn}>
              <HomePage />
            </Protected>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
