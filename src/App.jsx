import React, { useRef  } from 'react'
import Top from './components/Top'
import Skill from './components/Skill'
import Projets from './components/Projets'
import Bottom from './components/Bottom'
import './App.css'

function App() {
  const Contact = useRef(null)
  function scrollToBottom() {
    Contact.current.scrollIntoView({ behavior: 'smooth' })
    
  }
  return (
    <>
      <Top 
      onClick={scrollToBottom}
      />
      <Skill />
      
      <Projets
      onClick={scrollToBottom}
      />
      
      <div ref={Contact} className="Scroll">
        <Bottom /> 
      </div>
    </>
  )
}

export default App
