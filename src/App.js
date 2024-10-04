import { useState } from 'react';
import './App.css';
import Chat from './Chat';
import Chatbot from './Chatbot';

function App() {
  const [ text, setText ] = useState('')
  const [ response, setResponse ] = useState(null)
  const [ thinking, setThinking ] = useState(false)
  const [ img, setImg ] = useState(null)
  const [ selection, setSelection ] = useState('')

  const getCompletion = async () => {
    setThinking(true)
   const response = await fetch('http://localhost:8000/completion', {
        method: 'POST',
        body: JSON.stringify({text}),
        headers: {
          'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    setThinking(false)
    setResponse(data.message.content)
    setText('')
  }

  const getImage = async() => {
    setThinking(true)
    const response = await fetch('http://localhost:8000/image', {
         method: 'POST',
         body: JSON.stringify({text}),
         headers: {
           'Content-Type': 'application/json'
         }
     });
     const data = await response.json();
     setThinking(false)
     setImg(data.url);
     setText('')
  }
  const onSelect = (e) => {
    setSelection(e.target.value)
  }
 
  return (
    <div className="App d-flex">
      <section className='main container d-flex flex-column justify-content-between align-items-center text-center w-75 min-vh-100'>
        <h1 className='text-white m-4'>ScoobyGPT</h1>
         <Chatbot response={response} selection={selection} thinking={thinking} img={img} />
        <div className='bottom-section d-flex flex-column justify-content-center align-items-center text-center my-3 w-100'>
          <Chat setPrompt={setText} getImage={getImage} selection={selection} getCompletion={getCompletion} text={text} />
          <div className='my-2'>
            <div className="form-check form-check-inline">
                <input onChange={onSelect} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="chat" />
                <label className="form-check-label text-white" htmlFor="inlineRadio1">Chat</label>
            </div>
            <div className="form-check form-check-inline">
                <input onChange={onSelect} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="image" />
                <label className="form-check-label text-white" htmlFor="inlineRadio2">Image</label>
            </div>
        </div>
          <p className='text-secondary py-2'>Created By Luis Curiel</p>
        </div>
      </section>
    </div>
  );
}

export default App;
