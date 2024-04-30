/* eslint-disable react/jsx-no-undef */
"use client"

/* eslint-disable react/no-unescaped-entities */
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import github from '../../public/assets/images/icon-github.svg'
import linkedin from '../../public/assets/images/icon-linkedin.svg'
import twitter from '../../public/assets/images/icon-twitter.svg'
import frontend from '../../public/assets/images/icon-frontend-mentor.svg'
import PhotoProfileDesktop from '../../public/assets/images/PhotoDesktop.png'
import PhotoProfileTablet from '../../public/assets/images/PhotoTablet.png'
import PhotoProfileMobile from '../../public/assets/images/PhotoMobile.png'
import Cursor from './cursor'
import  Reveal  from './Reveal'
import { motion, useAnimate, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'
import DialogLogin from './DialogLogin'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'

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
    <div className="absolute z-10 lg:top-[14vw] md:top-[39vw]  max-md:top-[50vw] max-md:left-[-20rem] left-[-4rem]">
        <Image fill={true} src={"./assets/images/pattern-rings.svg"} alt="background-pattern" />

    </div>


        <div className="flex flex-col items-center justify-center max-w-[1440px] w-[80%] relative">
            <div   className="flex md:flex-row md:gap-10 flex-col items-center text-start justify-start w-full "  >
                    <Reveal v={{
                        hidden: {opacity:0 , x:-75 },
                        visible: {opacity:1 , x:0}
                    }}>

                            <h1 className='text-[1rem] cursor-pointer font-bold text-white mb-[0.5rem] md:text-[3vw] lg:text-[2vw]'>lucaszebre</h1>

                        </Reveal>
                  
                    
                    <span  onClick={()=>props.onClick('projects')} className='text-white hover:underline font-bold md:flex hidden cursor-pointer hover:decoration-1  hover:decoration-[#00ff80]' >projects</span>
                    <span  onClick={()=>props.onClick('contact')} className='text-white hover:underline  font-bold md:flex hidden cursor-pointer hover:decoration-1 hover:underline hover:decoration-[#00ff80]' >contact</span>
                    <a href='/Portfolio/blog' className='text-white hover:underline  font-bold md:flex hidden cursor-pointer hover:decoration-1 hover:underline hover:decoration-[#00ff80]'>blog</a>
                    <DialogLogin>

                        <span className='text-white hover:underline  font-bold md:flex hidden cursor-pointer hover:decoration-1 hover:underline hover:decoration-[#00ff80]'>login</span>
                    </DialogLogin>

                
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
                        <a className='text-2xl text-white font-bold' href="/Portfolio/assets/cv.pdf" target="_blank">CV</a>
                    </div>
                </Reveal>
            </div>

            <div 
             className="md:mt-[4rem] mt-[90vw] items-center text-center lg:mt-[3rem] lg:text-start w-full flex flex-col ">
            <Reveal v={{
                    hidden: {opacity:0 , x:75,width:'100%',height:'100%'},
                    visible: {opacity:1 , x:0}
                }}>

                    <div className="md:text-[4rem] font-bold md:leading-[5rem]  text-3xl md:w-[65%] w-full text-center md:text-start text-white lg:text-[6vw] font-bold lg:w-[70%]">
                            Nice to meet you!
                            I'm <span  className='text-decoration-4 decoration-[#00ff80] text-decoration-underline'>Lucas Zebre.</span>
                           
                    </div>
                    <div className="w-full text-start text-[1.5rem] md:w-[70%] text-white font-400 lg:text-[1.5vw] mt-[0.5em] lg:w-[40%] leading-2">
                               <div className=' w-full hidden md:flex'>
                               <TypeAnimation
                        sequence={[
                            "I'm a Web Developer passionate about building accessible web apps that users love.",
                            20,
                            "For September 2024, I am looking for a 14-month internship as a Web Developer.",
                            20,
                            "Currently enrolled in the Web Academy by Epitech in Paris, I am pursuing a Bachelor's degree in Web Development (Bac +2).",
                            20,
                            "I am following a 10-month path, learning new skills. In this program, we have no professors.",
                            20,
                            "We learn everything independently, which is amazing because it gives me the ability to adapt to every project.",
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        // className='hidden'
                        style={{'textAlign':'start'}}
                    />
                                </div>     
                                <div className='flex md:hidden'>
                                <TypeAnimation
                        sequence={[
                            "I'm a Web Developer passionate about building accessible web apps that users love.",
                            20,
                            "For September 2024, I am looking for a 14-month internship as a Web Developer.",
                            20,
                            "Currently enrolled in the Web Academy by Epitech in Paris, I am pursuing a Bachelor's degree in Web Development (Bac +2).",
                            20,
                            "I am following a 10-month path, learning new skills. In this program, we have no professors.",
                            20,
                            "We learn everything independently, which is amazing because it gives me the ability to adapt to every project.",
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        // className='hidden'
                        style={{'textAlign':'center'}}
                    />
                                    </div>    
                                       

                       
                    </div>
                    
                <Reveal v={{
                    hidden: {opacity:0 , x:75},
                    visible: {opacity:1 , x:0}
                }}
                width='fit-content'>
                    <div className="flex flex-row gap-2 hidden md:flex items-center justify-between">
                        <a href="https://github.com/lucaszebre" target="_blank"><Image className='w-[3vw] mr-[1vw] min-w-[19.2px] lg:w-[2vw]' src={github} alt="github-icon" /></a>
                        <a href="https://www.frontendmentor.io/profile/Kihura" target="_blank"><Image className='w-[3vw] mr-[1vw] min-w-[19.2px] lg:w-[2vw]' src={frontend} alt="frontend-icon" /></a>
                        <a href="https://www.linkedin.com/in/lucas-zebre-22305a191/" target="_blank"><Image className='w-[3vw] mr-[1vw] min-w-[19.2px] lg:w-[2vw]' src={linkedin} alt="linkedin-icon" /></a>
                        <a href="https://twitter.com/ZebreLucas" target="_blank"><Image className='w-[3vw] mr-[1vw] min-w-[19.2px] lg:w-[2vw]' src={twitter} alt="twitter-icon" /></a>
                        <a className='text-2xl text-white font-bold' href="/Portfolio/assets/cv.pdf" target="_blank">CV</a>
                    </div>
                </Reveal>
                    <div onClick={ ()=>props.onClick('contact')}  className="text-[3vw] lg:text-[2vw] justify-center md:justify-start flex text-white cursor-pointer font-400 mb-[2em] decoration-4 underline decoration-[#00ff80]">
                        CONTACT ME  
                    </div>
                    </Reveal>


                </div>
                <div className='hidden lg:w-[30.903vw] h-[50vw] absolute z-[-33] right-0 top-0 top-0 lg:block'>
                <Image fill={true}  src={PhotoProfileDesktop} alt="Photo de lucas zebre " />

                </div>
            </div>
            <div className='md:hidden block w-[50%] h-[95vw] absolute z-[-33] top-0'>
            <Image fill={true} src={PhotoProfileMobile} alt="Photo de lucas zebre " />

            </div>
            <div className='lg:hidden md:block hidden w-[31.445vw] h-[58.594vw] absolute z-[-33] right-0 top-0'>
                <Image fill={true} src={PhotoProfileTablet} alt="Photo de lucas zebre " />

            </div>



        
    </div>
    </>
    )
}

export default Top
