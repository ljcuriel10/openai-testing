import React from 'react'

const Chat = ({setPrompt, getCompletion, text}) => {
    
  const onChangeHandler = (e) => {
    setPrompt(e.target.value)
  }

  return (
    <div className='input-container position-relative w-100'>
        <input className='form-control text-center' placeholder='Ask away :)' onChange={onChangeHandler} value={text} />
        <div id='submit' onClick={getCompletion}><i className="fa-solid fa-paper-plane text-black fs-5 "></i></div>
    </div>
  )
}

export default Chat;