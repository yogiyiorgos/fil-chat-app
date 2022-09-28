import addUser from '../assets/images/addUser.svg'
import videoCall from '../assets/images/videoCall.svg'
import more from '../assets/images/more.svg'
import Messages from './Messages'
import InputMessage from './InputMessage'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chat-info'>
        <span>Yiorgos</span>
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
