import './home.style.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const signout = () => {
    dispatch({ type: 'SIGNOUT' })
    navigate('/')
  }
  return (
    <div className="body">
      <div className="container">
        <div>
          <h2 style={{ marginTop: '20' }}>
            This is home page and you are normal user
          </h2>
        </div>
        <div>
          <button className="btn-danger" onClick={signout}>
            Sign out
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
