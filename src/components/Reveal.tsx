"use client"

import { Variants, motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface Props{
    children:React.ReactNode;
    width?:string;
    justifyContent?:string;
    display?:string;
    v:Variants
}

const Reveal = (props:Props)=>{
 

    const ref = useRef(null)
    const InView= useInView(ref,{once:true})


    const mainControl = useAnimation()
    useEffect(()=>{
        if(InView){
            mainControl.start('visible')
        }else{
            mainControl.set('hidden')
        }

    },[InView])
    return (
        <div ref={ref}  style={{position:"relative",justifyContent:props.justifyContent,display:props.display,width:props.width,overflow:"hidden"}}>
            <motion.div
                variants={props.v}
                initial="hidden"
                animate={mainControl}
                transition={{
                    duration:0.5, delay: 0.25 
                }}
            >
                {props.children}
            </motion.div>
           
        </div>
    )
}

export default Reveal;