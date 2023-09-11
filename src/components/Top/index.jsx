import React from 'react'
import github from '../../../public/assets/images/icon-github.svg'
import linkedin from '../../../public/assets/images/icon-linkedin.svg'
import twitter from '../../../public/assets/images/icon-twitter.svg'
import frontend from '../../../public/assets/images/icon-frontend-mentor.svg'
import PhotoProfileDesktop from '../../../public/assets/images/PhotoDesktop.png'
import PhotoProfileTablet from '../../../public/assets/images/PhotoTablet.png'
import PhotoProfileMobile from '../../../public/assets/images/PhotoMobile.png'
import PatternRings from '../../../public/assets/images/pattern-rings.svg'

import './TopStyle.css'
const Top = (props) => {
    return (
    <>
    <div className="TopContainer">
    <img className="PatternRings" src={PatternRings} alt="background-pattern" />

        <div className="TopWrapper">
            <div className="TopNav">
                <a href="" download>
                    <h1 className='TopNavLogo'>lucaszebre</h1>
                </a>

                <div className="TopNavLinks">
                    <a href="https://github.com/lucaszebre" target="_blank"><img className='TopNavItems' src={github} alt="github-icon" /></a>
                    <a href="https://www.frontendmentor.io/profile/Kihura" target="_blank"><img className='TopNavItems' src={frontend} alt="frontend-icon" /></a>
                    <a href="https://www.linkedin.com/in/lucas-zebre-22305a191/" target="_blank"><img className='TopNavItems' src={linkedin} alt="linkedin-icon" /></a>
                    <a href="https://twitter.com/ZebreLucas" target="_blank"><img className='TopNavItems' src={twitter} alt="twitter-icon" /></a>
                    </div>
            </div>

            <div className="TopContent">
                    <div className="ContentSalute">
                            Nice to meet you!
                            I'm <span className='underline'>Lucas Zebre.</span>
                    </div>
                    <div className="ContentDescription">
                        Based in Paris , I'm a Fullstack Developer.
                        passionate about building accessible web apps that user love.
                    </div>
                    <div onClick={props.onClick}  className="ContentButton">
                        CONTACT ME  
                    </div>

                </div>
                    <img className='PhotoProfileDesktop' src={PhotoProfileDesktop} alt="Photo de lucas zebre " />
            </div>
            <img className='PhotoProfileMobile' src={PhotoProfileMobile} alt="Photo de lucas zebre " />

            <img className='PhotoProfileTablet' src={PhotoProfileTablet} alt="Photo de lucas zebre " />


        
    </div>
    </>
    )
}

export default Top
