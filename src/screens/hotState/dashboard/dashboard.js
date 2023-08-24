import './dashboard.style.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const signout = () => {
    dispatch({ type: 'SIGNOUT' })
    navigate('/')
  }
  return (
    <div className="body">
      <div className="container">
        <h2 style={{ marginTop: '20' }}>
          This is dashboard page and you are admin user
        </h2>
        <button className="btn-danger" onClick={signout}>
          Sign out
        </button>
      </div>
    </div>
  )
}

export default Dashboard
