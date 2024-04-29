"use client"

import React, { useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import MarkdownPreview from "@uiw/react-markdown-preview";

const Press = () => {

  let readme = "# My Developer Journey\n\
\n\
## Introduction\n\
In 2019, I embarked on my developer journey as a computer science student at Sorbonne University. Delving into a Python clone, my journey began with practical duo sessions, igniting <span style='background-color: #FFFF00'> my passion for problem-solving </span> and pushing me to constantly seek solutions.\n\
![App Screenshot](./assets/sorbonne.jpg)\n\
\n\
## Early Doubts and Exploration\n\
Navigating the vibrant city of Paris, doubts clouded my path. Unsure of my career trajectory, I grappled with distractions, yet remained determined to explore my potential. <span style='background-color: #FFFF00'> It was a period of self-discovery,</span> where understanding the value of money came through hard-earned lessons.\n\
![App Screenshot](./assets/exploring.jpg)\n\
\n\
## Transition to Working\n\
Opting out of my second university year wasn't due to lack of intelligence but a sense of aimlessness. It was in the realm of work that the importance of coding skills and problem-solving prowess truly dawned on me. Enduring uninspiring roles reinforced my gratitude for my capabilities.\n\\n\
![App Screenshot](./assets/server.jpg)\n\
\n\
## Decision to Become a Web Developer\n\
In 2022, a pivotal decision was made: I would forge a path as a web developer. Armed with <span style='background-color: #FFFF00'> HTML, CSS, and JS knowledge,</span> I initially sought employment opportunities. Realizing the necessity of React, I transitioned to internships, despite the challenges posed by the French job market.\n\
\n\
## Discovering the Web Academy\n\
The Web Academy by Epitech emerged as a beacon of tailored learning. Over ten months, I honed my skills, delved into SQL and PHP, and conquered projects that seemed insurmountable at first. <span style='background-color: #FFFF00'> From SQL novitiate to crafting a PHP Twitter clone in six months, my growth was tangible </span>.\n\
\n\
## Current Progress\n\
Fast forward to April 2024, and I find myself collaborating on cutting-edge projects. Leveraging tools like Docker, I'm spearheading innovative solutions such as a Spotify clone. Each milestone reaffirms my dedication and drives me towards realizing my vision: <span style='background-color: #FFFF00'> i want to create thing and do thing that excite me </span>\n\
<video width='200px' height='200px' autoPlay loop muted><source src='./assets/video.mp4' type='video/mp4' />Your browser does not support the video tag.</video>\n\
## Conpetetive spirit\n\
Also i like competition , i did a lot of sport in my life from basketball to football to surf to beach-tennis , etc . I ended , doing a lot a skate , this sport it's my my go to , just a way to challenge myself , learning new thing , just being focus one thing for few hours . Progressing everyday , fall , hurting my self . Could sounds sadomasochist but  for those reason i really like to skate . To do parallele with web develloper in skate we always fail before landing a tricks , i think it's the same in life , the most important is that you stay consistant and keep trying smartly \n\
";



    let [isOpen, setIsOpen] = useState(false)


 

    useEffect(() => {
        const handleKeyPress = (event: { key: string; }) => {
          if(event.key=='a' || event.key=='A'){
            setIsOpen(isOpen=>!isOpen)
          }
        };
    
        document.addEventListener('keydown', handleKeyPress);
    
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, []);
    
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

  return (
    <>
   <div className='fixed top-4 right-4 lg:flex hidden flex-row  gap-2 z-10 items-end text-white bg-[#00ff80] rounded p-2'>
      press  <div className='p-1 px-2 border-1 bg-black flex justify-center items-center border-gray rounded '>
        A
      </div> 
      to know more about me
    </div>  
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" h-[80%] w-[80%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                
                  <div className="mt-2">
                    
                    <MarkdownPreview source={readme}  />
                  </div>

                  <div className="mt-4 flex flex-row gap-4">
                    <a
                      href="/Portfolio/assets/cv.pdf"
                      target='_blank'
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Download my cv
                    </a>
                    <a
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Contact me
                    </a>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button> 
                   
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
   
  )
}

export default Press
