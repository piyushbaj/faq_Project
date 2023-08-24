import './App.css'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { app } from './firebase'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from './firebase'

const isLoggedIn = (state) => state.login

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const isLoggedInState = useSelector(isLoggedIn)

  useEffect(() => {
    console.log('isLoggedInState :: ', isLoggedInState)
  }, [])

  //real time data base which is firebase realtime data
  //firebae - storage, firebasedatabase, realtimedatabase
  const addUser = async () => {
    try {
      const response = await fetch(
        'https://faq-project-react-default-rtdb.firebaseio.com/userCollection.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: 'Piyush',
            phone: '8934938343',
            email: 'piyush@gmail.com',
            password: '12345',
          }),
        },
      )

      console.log('response ;; ', response)
      if (response.ok) {
        const jsonData = await response.json()
        console.log('jsonData ', jsonData)
      } else {
        throw new Error('Error: ' + response.status)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      {`Login State :: ${isLoggedInState.isLoggedIn}`}
      <button onClick={() => addUser()}>set login state</button>
    </div>
  )
}

export default App
