"use client"

// import "./styles.css";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  animate
} from "framer-motion";
import { wrap } from "@motionone/utils";
import useMeasure from "react-use-measure";

interface Props{
  children:React.ReactNode,
}

export const  ParallaxSkill = (props:Props) => {
 


  const FAST_DURATION = 10;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }


    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);
  
  

 
  return (
    <div className="w-screen h-[150px]   justify-center flex flex-col ">
      <motion.div className="h-[100px]    flex flex-row  justify-between"
       style={{ x: xTranslation }}
       ref={ref}
       onHoverStart={() => {
         setMustFinish(true);
         setDuration(SLOW_DURATION);
       }}
       onHoverEnd={() => {
         setMustFinish(true);
         setDuration(FAST_DURATION);
       }}
       >
        {props.children}
      </motion.div>
    </div>
  );
}


