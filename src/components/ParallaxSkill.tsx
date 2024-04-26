// import "./styles.css";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface Props{
  children:React.ReactNode,
  baseVelocity:number
}

export const  ParallaxSkill = (props:Props) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 200,
    stiffness: 200
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -105, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    if(!props.baseVelocity){
      props.baseVelocity=100
    }

    let moveBy = directionFactor.current * props.baseVelocity * (delta / 1000);


    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

 
  return (
    <div className="w-screen h-[150px]   justify-center flex flex-col ">
      <motion.div className="h-[100px]    flex flex-row  justify-between" style={{ x }}>
        {props.children}
      </motion.div>
    </div>
  );
}


