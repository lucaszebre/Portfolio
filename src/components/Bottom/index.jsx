import React from 'react'
import github from '../../../public/assets/images/icon-github.svg'
import linkedin from '../../../public/assets/images/icon-linkedin.svg'
import twitter from '../../../public/assets/images/icon-twitter.svg'
import frontend from '../../../public/assets/images/icon-frontend-mentor.svg'
import PatternRings from '../../../public/assets/images/pattern-rings.svg'

import './BottomStyle.css'


const Bottom = () => {

    const [message, setMessage] = React.useState('')
    const [Name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [ErrorName, setErrorName] = React.useState(false)
    const [ErrorMail, setErrorMail] = React.useState(false)
    const [ErrorMessage, setErrorMessage] = React.useState(false)
    const [success, setSuccess] = React.useState(false)
    
    function sendFeedback(templateId, variables) {
        window.emailjs.send(
            'service_941kynd', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
    
    
    
    function handleSubmit(e) {
        e.preventDefault()
            handleEmail()
            handleMessage()
            handleName()
            if(success){
            sendFeedback('template_ln941ys', { message_html: message, from_name: Name, reply_to: email })
            setName('')
            setEmail('')
            setMessage('')
        }
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
        <div className="BottomContainer">
        <img className="PatternRings" src={PatternRings} alt="background-pattern" />

            <div className="BottomWrapper">
                <div className="BottomContact">
                    <div className="BottomContactTitle">
                        Contact
                    </div>
                    <div className="BottomContactDescription">
                        I would love to hear about your project and how I could help.
                        Please fill the form and I'll get back to you as soon as possible .
                    </div>
                </div>
                <div className="BottomForm">
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" onChange={e => setName(e.target.value)} placeholder='NAME' className="BottomImput"  />
                        {ErrorName && <div className="Error">Please enter your name</div>}
                        <input type="text" onChange={e => setEmail(e.target.value)}  placeholder='EMAIL' className="BottomImput"  />
                        {ErrorMail && <div className="Error">Please enter your mail</div>}
                        <textarea type="text" onChange={e => setMessage(e.target.value)} placeholder='MESSAGE' className="Bottomtextarea"  />
                        {ErrorMessage && <div className="Error">Please enter your message</div>}

                        <button >SEND MESSAGE</button>
                    </form>
                </div>
            </div>

            <div className="Footer">
                <div className="FooterName">
                    lucaszebre
                </div>
                <div className="FooterLinks">
                <a href="https://github.com/lucaszebre" target="_blank"><img src={github} alt="github-logo" className='FooterItems' /></a>
                <a href="https://www.frontendmentor.io/profile/Kihura" target="_blank"><img src={frontend} alt="frontend-logo" className='FooterItems' /></a>
                <a href="https://www.linkedin.com/in/lucas-zebre-22305a191/" target="_blank"><img src={linkedin} alt="linkedin" className='FooterItems' /></a>
                <a href="https://twitter.com/ZebreLucas" target="_blank"><img src={twitter} alt="twitter-logo" className='FooterItems' /></a>
            </div>
            </div>
        </div>
    </>
    )
}

export default Bottom
