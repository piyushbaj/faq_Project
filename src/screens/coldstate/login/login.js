import './login.style.css'
import { useEffect, useState } from 'react'
import { FormControl, TextField, Button } from '@mui/material'
import { useLogin } from './useLogin'
import { Link } from 'react-router-dom'

function Login({ isLoggedIn }) {
  const { onLoginHandler, onLoginFieldHandler, onSignupHandler } = useLogin({
    isLoggedIn,
  })
  return (
    <div className="body">
      <FormControl>
        <h2 style={{ marginTop: '20' }}>Login Form</h2>
        <TextField
          label="Username"
          id="username"
          variant="outlined"
          onChangeCapture={onLoginFieldHandler}
        />
        <div id="password">
          <TextField
            label="password"
            id="password"
            variant="outlined"
            onChangeCapture={onLoginFieldHandler}
          />
        </div>
        <div id="buttonContainer">
          <Button onClick={onLoginHandler} variant="contained">
            Login
          </Button>
          <Button
            id="signupButton"
            onClick={onSignupHandler}
            variant="contained"
          >
            SignUp
          </Button>
        </div>
      </FormControl>
    </div>
  )
}

export default Login
