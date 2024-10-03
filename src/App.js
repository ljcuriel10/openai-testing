import { useState } from 'react';
import './App.css';
import Chat from './Chat';
import Chatbot from './Chatbot';

function App() {
  const [text, setText] = useState('')
  const [response, setResponse] = useState(null)
  const [thinking, setThinking] = useState(false)

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
    setResponse(data.message.content);
    setText('')
  }

  return (
    <div className="App d-flex">
      <section className='main container d-flex flex-column justify-content-between align-items-center text-center w-75 min-vh-100'>
        <h1 className='text-white m-4'>ScoobyGPT</h1>
         <Chatbot response={response} thinking={thinking} />
        <div className='bottom-section d-flex flex-column justify-content-center align-items-center text-center my-3 w-100'>
          <Chat setPrompt={setText} getCompletion={getCompletion} text={text} />
          <p className='text-secondary py-2'>Created By Luis Curiel</p>
        </div>
      </section>
    </div>
  );
}

export default App;
