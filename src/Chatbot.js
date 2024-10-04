import Assistant from "./Assistant"
import ImageGenerator from "./ImageGenerator"

const Chatbot = ({response, thinking, img, selection}) => {
    
    const aiThinking = (
        <div>
            <strong role="status">Thinking... </strong>
            <div className="spinner-border text-danger ms-auto" aria-hidden="true"></div>
        </div>
    )
       
    const imgOrChat = selection == 'chat' ? <Assistant response={response} /> : <ImageGenerator img={img} /> 
   
  return (
    <div className='container border text-center h-100 py-5 my-3 bg-secondary text-white rounded shadow'>
        { thinking ? aiThinking : imgOrChat }
    </div>
  )
}

export default Chatbot