import addUser from '../assets/images/addUser.svg'
import videoCall from '../assets/images/videoCall.svg'
import more from '../assets/images/more.svg'
import Messages from './Messages'
import InputMessage from './InputMessage'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'

const Chat = () => {
  const { data } = useContext(ChatContext)

  return (
    <div className='chat'>
      <div className='chat-info'>
        <span>{data.user?.displayName}</span>
        <div className='chat-icons'>
          <img src={addUser} alt='Add user' />
          <img src={videoCall} alt='Video call' />
          <img src={more} alt='More options' />
        </div>
      </div>
      <Messages />
      <InputMessage />
    </div>
  )
}

export default Chat
