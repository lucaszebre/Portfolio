/* eslint-disable react/jsx-no-undef */
"use client"

/* eslint-disable react/no-unescaped-entities */
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import github from '../../public/assets/images/icon-github.svg'
import linkedin from '../../public/assets/images/icon-linkedin.svg'
import twitter from '../../public/assets/images/icon-twitter.svg'
import frontend from '../../public/assets/images/icon-frontend-mentor.svg'
import PhotoProfileDesktop from '../../public/assets/images/portfolio-image.png'
import PhotoProfileTablet from '../../public/assets/images/PhotoTablet.png'
import PhotoProfileMobile from '../../public/assets/images/PhotoMobile.png'
import Cursor from './cursor'
import  Reveal  from './Reveal'
import { motion, useAnimate, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'
import DialogLogin from './DialogLogin'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import Link from 'next/link'

const Top = (props: { onClick: (arg0: string) => void }) => {

   

   const [isActive, setIsActive] = useState(false);
   const [scope, animate] = useAnimate()

   const controls = useAnimation();

    const { scrollYProgress } = useScroll({ target: scope});
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    const isInView = useInView(scope)
 
 
    useEffect(() => {
        if (isInView) {
            animate(scope.current, { opacity: 1  } ,{ duration: 3 } )

          }else{
            animate(scope.current, { opacity: 0 },{ duration: 3 })

          }
    }, [animate, isInView, scope])

    return (
    <>
    <div ref={scope}  className="flex flex-col items-center justify-center w-full h-full">
        
    <Cursor isActive={isActive} />
  


        <div className="flex flex-col items-center justify-center max-w-[1440px] w-[80%] relative">
            <div   className="flex md:flex-row md:gap-10 flex-col  items-center text-start justify-center lg:justify-start w-full "  >
                    <Reveal v={{
                        hidden: {opacity:0 , x:-75 },
                        visible: {opacity:1 , x:0}
                    }}>

                            <h1 className='text-[1rem] cursor-pointer font-bold text-white mb-[0.5rem] md:text-[3vw] lg:text-[2vw]'>lucaszebre</h1>

                        </Reveal>
                  
                    
                    <span  onClick={()=>props.onClick('projects')} className='text-white hover:underline font-bold md:flex hidden cursor-pointer hover:decoration-1  hover:decoration-[#00ff80]' >projects</span>
                    <span  onClick={()=>props.onClick('contact')} className='text-white   font-bold md:flex hidden cursor-pointer hover:decoration-1 hover:underline hover:decoration-[#00ff80]' >contact</span>
                    <a href='https://lucaszebre.substack.com/' target='_blank' className='text-white   font-bold md:flex hidden cursor-pointer hover:decoration-1 hover:underline hover:decoration-[#00ff80]'>blog</a>
                 
                
                    <Reveal v={{
                    hidden: {opacity:0 , x:75},
                    visible: {opacity:1 , x:0}
                }}
                width='fit-content'>
                    <div className="flex flex-row gap-2  md:hidden items-center justify-between">
                        <a href="https://github.com/lucaszebre" target="_blank"><Image className='w-[3vw] mr-[1vw] min-w-[19.2px] lg:w-[2vw]' src={github} alt="github-icon" /></a>
                        <a href="https://www.frontendmentor.io/profile/Kihura" target="_blank"><Image className='w-[3vw] mr-[1vw] min-w-[19.2px] lg:w-[2vw]' src={frontend} alt="frontend-icon" /></a>
                        <a href="https://www.linkedin.com/in/lucas-zebre-22305a191/" target="_blank"><Image className='w-[3vw] mr-[1vw] min-w-[19.2px] lg:w-[2vw]' src={linkedin} alt="linkedin-icon" /></a>
                        <a href="https://twitter.com/ZebreLucas" target="_blank"><Image className='w-[3vw] mr-[1vw] min-w-[19.2px] lg:w-[2vw]' src={twitter} alt="twitter-icon" /></a>
                        <a className='text-2xl text-white font-bold' href="/assets/cv.pdf" target="_blank">CV</a>
                    </div>
                </Reveal>
            </div>

            <div 
             className="mt-[4rem]  lg:items-start items-center text-center gap-[2rem]  lg:text-start w-full flex  flex-col-reverse lg:flex-row ">
            <div className='flex flex-col lg:items-start items-center w-[70%] gap-4 '>

                    <div className="md:text-[4rem] font-bold lg:leading-[7rem]  md:leading-[4rem]  text-2xl  w-full text-center lg:text-start  text-white lg:text-[6vw]  gap-3 lg:w-[85%]">
                            Nice to meet you!
                            I'm Lucas Zebre.
                           
                    </div>
                
                    
                <Reveal v={{
                    hidden: {opacity:0 , x:75,width:'100%'},
                    visible: {opacity:1 , x:0}
                    
                }}
                 justifyContent='center'
                display='flex'
                >
                    <div className="flex flex-row gap-2  md:flex items-center justify-between">
                        <a href="https://github.com/lucaszebre" target="_blank"><Image className='w-[3vw] mr-[1vw] min-w-[19.2px] lg:w-[2vw]' src={github} alt="github-icon" /></a>
                        <a href="https://www.frontendmentor.io/profile/Kihura" target="_blank"><Image className='w-[3vw] mr-[1vw] min-w-[19.2px] lg:w-[2vw]' src={frontend} alt="frontend-icon" /></a>
                        <a href="https://www.linkedin.com/in/lucas-zebre-22305a191/" target="_blank"><Image className='w-[3vw] mr-[1vw] min-w-[19.2px] lg:w-[2vw]' src={linkedin} alt="linkedin-icon" /></a>
                        <a href="https://twitter.com/ZebreLucas" target="_blank"><Image className='w-[3vw] mr-[1vw] min-w-[19.2px] lg:w-[2vw]' src={twitter} alt="twitter-icon" /></a>
                        <a className='text-2xl text-white font-bold' href="/assets/cv.pdf" target="_blank">CV</a>
                    </div>
                </Reveal>
                    <div onClick={ ()=>props.onClick('contact')}  className="text-[5vw] lg:text-[2vw] justify-center  flex text-white cursor-pointer font-400 mb-[2em] decoration-4 underline decoration-[#00ff80]">
                        CONTACT ME  
                    </div>
            </div>

                    {/* <div className='hidden lg:w-[34vw] h-[35vw] w-full  max-w-[408px]  max-h-[400px]  relative lg:block'>
                <Image fill={true}  src={PhotoProfileDesktop} alt="Photo de lucas zebre " />

                </div> */}

                <Image width={408} height={400} src={PhotoProfileDesktop} alt="Photo de lucas zebre " />

                {/* <div className='lg:hidden md:block hidden w-[25.445vw] relative h-[26.594vw] '>
                    <Image fill={true} src={PhotoProfileDesktop} alt="Photo de lucas zebre " />

                </div> */}
                </div>
              
            </div>
               



        
    </div>
    </>
    )
}

export default Top
