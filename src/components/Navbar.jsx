const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Fil Chat</span>
      <div className='user'>
        <img
          src='https://avatars.githubusercontent.com/u/95660601?v=4'
          alt='Profile'
        />
        <span>Yiorgos</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
