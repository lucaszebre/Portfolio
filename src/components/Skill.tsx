"use client"

import React, { Key } from 'react'

import Marquee from "react-fast-marquee";
import Stack from './Stack';
import { skills } from '@/types';

const Skill = () => {

    
    return (

        
    <> 
    
    <div className='flex flex-col mt-[3.5rem] mb-[3.5rem] relative justify-center overflow-hidden  '>
        <Marquee
          className="overflow-hidden"
          play={true}
          pauseOnHover
          autoFill={true}
          direction='right'
          
        >
          {skills.map((skill:string,index:Key)=>{
            return (
                <Stack key={index} name={skill} />
            )
          })}
            

          
                    
        </Marquee>

    </div>

    

    </>
    )
}

export default Skill
