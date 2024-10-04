import React from 'react'
import Markdown from "react-markdown"

const Assistant = ({thinking, response}) => {
    const aiThinking = (
        <div>
            <strong role="status">Thinking... </strong>
            <div className="spinner-border text-danger ms-auto" aria-hidden="true"></div>
        </div>
    )
  return (
    <div>
         {thinking ? aiThinking : 
    <Markdown >{response}</Markdown>}
    </div>
  )
}

export default Assistant