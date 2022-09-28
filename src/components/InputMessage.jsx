import attach from '../assets/images/attach.svg'
import insertImage from '../assets/images/insertImage.svg'

const InputMessage = () => {
  return (
    <div className='input-message'>
      <input type='text' placeholder='Type something...' />
      <div className='send-button'>
        <img src={attach} alt='Attach a file button' />
        <input type='file' style={{ display: 'none' }} id='file' />
        <label htmlFor='file'>
          <img src={insertImage} alt='Insert' />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default InputMessage
