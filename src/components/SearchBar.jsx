import React from 'react'

const SearchBar = () => {
  return (
    <div className='search'>
      <div className='search-form'>
        <input type='text' placeholder='Search a chat' />
      </div>
      <div className='user-chat'>
        <img
          src='https://avatars.githubusercontent.com/u/95660601?v=4'
          alt=''
        />
        <div className='user-chat-info'>
          <span>Yiorgos</span>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
