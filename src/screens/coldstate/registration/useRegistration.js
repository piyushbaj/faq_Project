import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isEntryUnique } from './helper/serviceHelper'

// creating enum
const loginFormEnum = {
  username: 'username',
  password: 'password',
}

export const useRegistration = () => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
    role: 'user',
  })
  useEffect(() => {}, [userDetails])
  const navigate = useNavigate()

  const onRegistrationHandler = async () => {
    try {
      const isUniqueEntry = await isEntryUnique(userDetails.username)
      if (isUniqueEntry) {
        const response = await fetch(
          'https://faq-project-react-default-rtdb.firebaseio.com/userCollection.json',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...userDetails,
            }),
          },
        )

        console.log('response ;; ', response)
        if (response.ok) {
          navigate('/')
        } else {
          throw new Error('Error: ' + response.status)
        }
      } else {
        alert('username already is exist')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onRegistrationFieldHandler = (e) => {
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
      role: userDetails.role,
    })
  }

  const roleHandler = (value) => {
    setUserDetails({ ...userDetails, role: value })
  }

  return {
    onRegistrationFieldHandler,
    onRegistrationHandler,
    roleHandler,
    userDetails,
  }
}
