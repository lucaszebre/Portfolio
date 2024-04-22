import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";


const Reveal = ({children,width="auto",justifyContent="center",display="flex", v={
    hidden: {opacity:0 , y:75},
    visible: {opacity:1 , y:0}
}})=>{
 

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
        <div ref={ref}  style={{position:"relative",justifyContent,display,width,overflow:"hidden"}}>
            <motion.div
                variants={v}
                initial="hidden"
                animate={mainControl}
                transition={{
                    duration:0.5, delay: 0.25 
                }}
            >
                {children}
            </motion.div>
           
        </div>
    )
}

export default Reveal;