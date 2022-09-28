import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
      <div className='user-chat'>
        <img src='https://i.pravatar.cc/150?u=a042581f4e29026704d' alt='' />
        <div className='user-chat-info'>
          <span>Girl</span>
          <p>This is the latest message sent</p>
        </div>
      </div>

      <div className='user-chat'>
        <img src='https://i.pravatar.cc/150?u=fake@pravatar.com' alt='' />
        <div className='user-chat-info'>
          <span>Papous</span>
          <p>This is the latest message sent</p>
        </div>
      </div>

      <div className='user-chat'>
        <img src='https://i.pravatar.cc/150?u=a042581f4e29026704e' alt='' />
        <div className='user-chat-info'>
          <span>Pirate</span>
          <p>This is the latest message sent</p>
        </div>
      </div>

      <div className='user-chat'>
        <img src='https://i.pravatar.cc/150?u=a042581f4e29026704a' alt='' />
        <div className='user-chat-info'>
          <span>Hipster</span>
          <p>This is the latest message sent</p>
        </div>
      </div>
    </div>
  )
}

export default Chats
