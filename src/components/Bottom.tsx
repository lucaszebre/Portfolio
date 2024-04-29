/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import github from '../../public/assets/images/icon-github.svg'
import linkedin from '../../public/assets/images/icon-linkedin.svg'
import twitter from '../../public/assets/images/icon-twitter.svg'
import frontend from '../../public/assets/images/icon-frontend-mentor.svg'
import PatternRings from '../../public/assets/images/pattern-rings.svg'
import Reveal from './Reveal'
import toast, { Toaster } from 'react-hot-toast'
import Image from 'next/image'
import { useMutation } from '@tanstack/react-query'
import { SchemaContact } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import {  useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import axios from 'axios'
import { Icons } from './icons'
const Bottom = () => {

    const [message, setMessage] = React.useState('')
    const [Name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [ErrorName, setErrorName] = React.useState(false)
    const [ErrorMail, setErrorMail] = React.useState(false)
    const [ErrorMessage, setErrorMessage] = React.useState(false)
    const [success, setSuccess] = React.useState(false)
    const [isLoading,setIsLoading] = React.useState(false)

    // function sendFeedback(templateId:string, variables) {
    //     window.emailjs.send(
    //         'service_941kynd', templateId,
    //         variables
    //     ).then(res => {
    //         toast.success("Thank you for the email !")

    //         console.log('Email successfully sent!')
    //     })


    //         .catch(err =>{
    //             console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
    //             toast.error('Oh whell, the email fail, try again!')
    //         } )
    // }

    
      const form = useForm<z.infer<typeof SchemaContact>>({
        resolver: zodResolver(SchemaContact),
        defaultValues: {
            name:"",
          email: "",
         message:""
          
        },
      })
    
      async function  onSubmit(values: z.infer<typeof SchemaContact>) {
            setIsLoading(true)
            
             const data = await axios.post('/api/send',{
               email:values.email,
               name:values.name,
            message:values.message})  
            .then(function (response) {
                console.log(response);
                toast.success('Sucessfully send the message')
              })
              .catch(function (error) {
                toast.error('Error to send the message');
              });
            
            setIsLoading(false)
    
      }
    



    
    
    
    
    function handleName() {
        if (Name === '') {
            setSuccess(false)
            setErrorName(true)
        } else {
            setErrorName(false)
            setSuccess(true)
        }
    }
    function handleEmail() {
        const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if( emailRegEx.test(email) === false) {
            
            setSuccess(false)
            setErrorMail(true)
    }
    else {
        setErrorMail(false)
        setSuccess(true)}
}
    function handleMessage() {
        if (message === '') {
            setSuccess(false)
            setErrorMessage(true)
        }else{
            setErrorMessage(false)
            setSuccess(true)
            
        }
    }

    
    
    return (
    <>  
        <Toaster/>
        <div  className="w-full h-full py-10 flex flex-col justify-center items-center bg-[#242424] relative">
        <Image className="absolute z-10 lg:top-[14vw] md:top-[39vw]  max-md:top-[50vw] max-md:left-[-20rem] left-[-4rem]" src={"./assets/images/pattern-rings.svg"} alt="background-pattern" />

            <div className="lg:w-[80%] md:w-full max-w-[1440px] h-full flex lg:flex-row lg:justify-between md:items-center md:justify-center mb-[2em] flex-col max-md:w-[90%]">
            <div className='hidden lg:flex'>
            <Reveal
            width='100%'
            justifyContent='center'
            display='flex'
             v={{
                    hidden: {opacity:0 , x:-75},
                    visible: {opacity:1 , x:0}
                    }}>
                <div className="lg:w-[30%] md:w-[85%] md:items-center max-md:items-center max-md:w-full h-full flex flex-col justify-center lg:items-start ">
                    <div className="mb-[1rem] text-start text-white text-[7vw] font-bold">
                        Contact
                    </div>
                    <div className="md:text-center md:items-center md:text-[2vw] text-[2.8vw] text-white lg:text-[1vw] mb-[1rem] font-thin lg:text-start ">
                        I would love to hear about your project and how I could help.
                        Please fill the form and I'll get back to you as soon as possible .
                    </div>
                </div>
                    </Reveal>
            </div>
            <div className='lg:hidden flex'>
            <Reveal
            width='100%'
            justifyContent='center'
            display='flex'
             v={{
                    hidden: {opacity:0 , x:-75, display:'flex' ,justifyContent:"center"},
                    visible: {opacity:1 , x:0}
                    }}>
                <div className="lg:w-[30%] md:w-[85%] md:items-center max-md:items-center max-md:w-full h-full flex flex-col justify-center lg:items-start ">
                    <div className="mb-[1rem] text-start text-white text-[7vw] font-bold">
                        Contact
                    </div>
                    <div className="md:text-center md:items-center md:text-[2vw] text-[2.8vw] text-white lg:text-[1vw] mb-[1rem] font-thin lg:text-start ">
                        I would love to hear about your project and how I could help.
                        Please fill the form and I'll get back to you as soon as possible .
                    </div>
                </div>
                    </Reveal>
            </div>
          
                <div className="flex flex-col max-md:items-center">
                <Reveal v={{
                    hidden: {opacity:0 , x:75},
                    visible: {opacity:1 , x:0}
                    }}>
                        {/* //  FOrmulaire */}


                        <Form {...form} >
                        <form  onSubmit={form.handleSubmit(onSubmit)} className="p-3 content-start items-start flex-col space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                <FormLabel className="text-start items-start w-full" >Name</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="miguel" {...field} />
                                </FormControl>
                                
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="flex-col items-start content-start w-full">
                                <FormLabel className="text-start w-full" >Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="lucas1@gmail.com" {...field} />
                                </FormControl>
                                
                                <FormMessage />
                                </FormItem>
                            )}
                            /> 
                            <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className="flex-col items-start content-start w-full">
                                <FormLabel className="text-start w-full" >Message</FormLabel>
                                <FormControl>
                                    <Input placeholder="lucas1@gmail.com" {...field} />
                                </FormControl>
                                
                                <FormMessage />
                                </FormItem>
                            )}
                            /> 
                            
                            <Button  type="submit" className="w-full">{isLoading && (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                )}Login</Button>
                        </form>
                        </Form>
                    
                    </Reveal>
                </div>
            </div>
            
            <div className="md:mt-[4em] w-[85%] max-w-[1440px] lg:w-[80%] flex-row items-center justify-between border-white border-t-[1px]  max-md:mt-[2em] flex ">
            <Reveal v={{
                    hidden: {opacity:0 , y:175},
                    visible: {opacity:1 , y:0}
                    }}>
                <div className="max-md:text-[1rem] lg:mb-0 text-white lg:text-[2vw] font-bold mb-[1em] md:text-[3vw]">
                    lucaszebre
                </div>
                </Reveal>

                <Reveal v={{
                    hidden: {opacity:0 , y:175},
                    visible: {opacity:1 , y:0}
                    }}>
                <div className="flex flex-row justify-between gap-2">
                <a href="https://github.com/lucaszebre" target="_blank"><Image src={github} alt="github-logo" className='max-md:w-[3vw] mr-[1vw] max-md:min-w-[19.2px] md:w-[3vw] lg:w-[2vw]' /></a>
                <a href="https://www.frontendmentor.io/profile/Kihura" target="_blank"><Image src={frontend} alt="frontend-logo" className='max-md:w-[3vw] mr-[1vw] max-md:min-w-[19.2px] md:w-[3vw] lg:w-[2vw]' /></a>
                <a href="https://www.linkedin.com/in/lucas-zebre-22305a191/" target="_blank"><Image src={linkedin} alt="linkedin" className='max-md:w-[3vw] mr-[1vw] max-md:min-w-[19.2px] md:w-[3vw] lg:w-[2vw]' /></a>
                <a href="https://twitter.com/ZebreLucas" target="_blank"><Image src={twitter} alt="twitter-logo" className='max-md:w-[3vw] mr-[1vw] max-md:min-w-[19.2px] md:w-[3vw] lg:w-[2vw]' /></a>
                <a className='text-2xl text-white font-bold' href="/Portfolio/assets/cv.pdf" target="_blank">CV</a>

            </div>
            </Reveal>

            </div>
        </div>
    </>
    )
}

export default Bottom
