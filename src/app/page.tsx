/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import React, { useEffect, useRef  } from 'react'
import Bottom from '@/components/Bottom'
import Top from '@/components/Top'
import Projets from '@/components/Projets'
import Press from '@/components/Press'
export default function Home() {
  const bottom = useRef(null)
  const project = useRef(null);

  function scrollTo(ref: string) {

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
          <Bottom    /> 

          </div>
   
    </>
  )
}
