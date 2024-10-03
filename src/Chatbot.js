import Markdown from "react-markdown"

const Chatbot = ({response, thinking}) => {
   
  return (
    <div className='container border text-center h-100 py-5 my-3 bg-secondary text-white rounded shadow'>
        {thinking ? <p>I'm thinking</p> : 
    <Markdown >{response}</Markdown>}
    </div>
  )
}

export default Chatbot