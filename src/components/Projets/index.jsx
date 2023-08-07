import React from 'react'
import galleria from '../../../public/assets/images/thumbnail-project-6-large.webp'
import LinkDev from '../../../public/assets/LinkDev.jpg'
import Kanban from '../../../public/assets/Kanban.jpg'
import Invoice from '../../../public/assets/Invoice.jpg'
import Audiophile from '../../../public/assets/Audiophile.jpg'
import Designo from '../../../public/assets/Designo.jpg'

import './ProjetsStyle.css'

const Projets = (props) => {
    return (
    <>
    <div className="ProjetsContainer">
        <div className="ProjetsWrapper">
            <div className="ProjetsEnTitle">
                <h1>Projets</h1>
                <div className="Contactme" onClick={props.onClick}>
                    CONTACT ME
                </div>
            </div>
                <div className="ProjetsRow">
                <div className="ProjetsCard">
                        <a href="https://linkdev2.vercel.app/" target="_blank"><img  className="ImageProjets" src={LinkDev} alt="EntertainnementWeb-app" /></a>
                        <div className="ProjetsName">LINK DEV </div>
                        <div className="ProjetsTechno">REACT.JS SUPABASE POSTGRESQL MATERIAL UI </div>
                    </div>
                    <div className="ProjetsCard">
                        <a href="https://kanban-eosin.vercel.app/" target="_blank"><img  className="ImageProjets" src={Kanban} alt="EntertainnementWeb-app" /></a>
                        <div className="ProjetsName">KANBAN TASK MANAGER</div>
                        <div className="ProjetsTechno">REACT.JS FIREBASE TYPESCRIPT MATERIAL UI </div>
                    </div>
                    
                    
                    </div>
                    
                    <div className="ProjetsRow">
                    <div className="ProjetsCard">
                        <a href="https://invoice-lovat.vercel.app/" target="_blank"><img className="ImageProjets"src={Invoice} alt="Invoice-App" /></a>
                        <div className="ProjetsName">Invoice App </div>
                        <div className="ProjetsTechno">REACT.JS FIREBASE TYPESCRIPT MATERIAL UI</div>
                    </div>
                    <div className="ProjetsCard">
                        <a href="https://lucaszebre.github.io/AudiophileEcommerce/#/" target="_blank"><img className="ImageProjets"src={Audiophile} alt="AudioPhile-website" /></a>
                        <div className="ProjetsName">Audiophile E-Commerce Website</div>
                        <div className="ProjetsTechno">React.js JAVASCRIPT </div>
                    </div>
                    
                    
            </div>
            <div className="ProjetsRow">
                    <div className="ProjetsCard">
                        <a href="https://lucaszebre.github.io/Designo/#/" target="_blank"><img  className="ImageProjets" src={Designo} alt="EntertainnementWeb-app" /></a>
                        <div className="ProjetsName">Designo MultiPage Website</div>
                        <div className="ProjetsTechno">React.js JAVASCRIPT </div>
                    </div>
                

                    <div className="ProjetsCard">
                        <a href="https://lucaszebre.github.io/Galleria-App/" target="_blank"><img className="ImageProjets"src={galleria} alt="galleria-app" /></a>
                        <div className="ProjetsName">ART GALLERY SHOWCASE</div>
                        <div className="ProjetsTechno">React.js JAVASCRIPT</div>
                    </div>
                    
                    </div>
        </div>
    </div>
        
    </>
    )
}

export default Projets



