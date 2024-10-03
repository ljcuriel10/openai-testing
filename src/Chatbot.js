import Markdown from "react-markdown"

const Chatbot = ({response, thinking}) => {

    const aiThinking = (
        <div>
            <strong role="status">Thinking... </strong>
            <div className="spinner-border text-danger ms-auto" aria-hidden="true"></div>
        </div>
    )
   
  return (
    <div className='container border text-center h-100 py-5 my-3 bg-secondary text-white rounded shadow'>
        {thinking ? aiThinking : 
    <Markdown >{response}</Markdown>}
    </div>
  )
}

export default Chatbot