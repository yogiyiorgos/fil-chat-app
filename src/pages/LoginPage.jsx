const LoginPage = () => {
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='logo'>Fil Chat</span>
        <span className='subtitle'>Register</span>
        <form>
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <button>Sign In</button>
        </form>
        <p>Don't have an account? Login </p>
      </div>
    </div>
  )
}

export default LoginPage
