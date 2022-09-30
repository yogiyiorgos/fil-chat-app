import { useState } from 'react'
import addAvatar from '../assets/images/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db, storage } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate, Link } from 'react-router-dom'

const RegisterPage = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try {
      // Create user
      const res = await createUserWithEmailAndPassword(auth, email, password)

      // Create a unique image name
      const date = new Date().getTime()
      const storageRef = ref(storage, `${displayName + date}`)

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            // Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            })
            // Create user on Firestore
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })
            // Create empty user chats on Firestore
            await setDoc(doc(db, 'userChats', res.user.uid), {})
            navigate('/')
          } catch (err) {
            console.log(err)
            setErr(true)
          }
        })
      })
    } catch (err) {
      setErr(true)
    }
  }

  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='logo'>Fil Chat</span>
        <span className='subtitle'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='nickname' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <input style={{ display: 'none' }} type='file' id='file-input' />
          <label htmlFor='file-input'>
            <img src={addAvatar} alt='Add an avatar button' />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          Already have an account? <Link to='/login'>Login</Link>{' '}
        </p>
      </div>
    </div>
  )
}

export default RegisterPage
