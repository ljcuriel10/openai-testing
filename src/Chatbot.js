import Markdown from "react-markdown"

const Chatbot = ({response, thinking, img}) => {
    console.log(img)
    const aiThinking = (
        <div>
            <strong role="status">Thinking... </strong>
            <div className="spinner-border text-danger ms-auto" aria-hidden="true"></div>
        </div>
    )
   
  return (
    <div className='container border text-center h-100 py-5 my-3 bg-secondary text-white rounded shadow'>
        {/* {thinking ? aiThinking : 
    <Markdown >{response}</Markdown>} */}
        { thinking ? aiThinking : <img className="shadow" src={`${img}`} />}
    </div>
  )
}

export default Chatbot