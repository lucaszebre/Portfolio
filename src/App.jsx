import React, { useEffect, useRef  } from 'react'
import Top from './components/Top'
import Skill from './components/Skill'
import Projets from './components/Projets'
import Bottom from './components/Bottom'
import Cursor from './components/cursor'
import './App.css'
import { useScroll } from 'framer-motion'
import Press from './components/Press'

function App() {
  const bottom = useRef(null)
  const project = useRef(null);

  function scrollTo(ref) {

    if(ref==="contact"){
      if (bottom && bottom.current) {
        console.log("here")
  
        bottom.current.scrollIntoView({ behavior: 'smooth' });
      }
    }else if(ref==='projects'){
      if(project && project.current){
        project.current.scrollIntoView({ behavior: "smooth"})
      }
    }
    
}


  return (
    <>
      <Press />
      <Top 
          onClick={scrollTo}
          />
      
          <Skill  />
          <div className='w-full ' ref={project}>
          <Projets  />

          </div>
          <div className='w-full' ref={bottom}>
          <Bottom   /> 

          </div>
   
    </>
  )
}

export default App
