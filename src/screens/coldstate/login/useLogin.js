import { useState, useEffect, useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// creating enum
const loginFormEnum = {
  username: 'username',
  password: 'password',
  role: 'user',
}

export const useLogin = ({ isLoggedIn }) => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
  })
  const navigate = useNavigate()
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard')
    }
  }, [userDetails])
  const dispatch = useDispatch()

  const onLoginHandler = async (e) => {
    e.preventDefault()
    try {
      dispatch({ type: 'SET_LOADING', isLoading: true })
      fetch(
        'https://faq-project-react-default-rtdb.firebaseio.com/userCollection.json',
      )
        .then((res) => res.json())
        .then((data) => {
          Object.keys(data).forEach(function (key) {
            if (
              data[key].username == userDetails.username &&
              data[key].password == userDetails.password
            ) {
              console.log('ssuccess', data[key].username)
              //success
              const payload = {
                isLoggedIn: true,
                role: data[key].role,
                username: userDetails.username,
              }

              dispatch({ type: 'SET_USER_DETAILS', payload: payload })
              if (data[key].role === loginFormEnum.role) {
                navigate('/home')
              } else {
                navigate('/dashboard')
              }
            } else {
              console.log('Please fill corrent username or password')
            }
            dispatch({ type: 'SET_LOADING', isLoading: false })
          })
        })
    } catch (error) {
      dispatch({ type: 'SET_LOADING', isLoading: false })

      console.log('errpr', error)
    }
  }

  const onLoginFieldHandler = (e) => {
    // we are not using if else and switches
    setUserDetails({
      username:
        e.target.id === loginFormEnum.username
          ? e.target.value
          : userDetails.username,
      password:
        e.target.id === loginFormEnum.password
          ? e.target.value
          : userDetails.password,
    })
  }

  const onSignupHandler = () => {
    navigate('/signup')
  }

  return {
    onLoginFieldHandler,
    onLoginHandler,
    onSignupHandler,
  }
}
