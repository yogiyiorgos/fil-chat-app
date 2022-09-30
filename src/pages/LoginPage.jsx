import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const LoginPage = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (err) {
      setErr(true)
    }
  }
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='logo'>Fil Chat</span>
        <span className='subtitle'>Login</span>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <button>Sign In</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          Don't have an account? <Link to='/register'>Register</Link>{' '}
        </p>
      </div>
    </div>
  )
}

export default LoginPage
