import React from 'react'
import galleria from '../../../public/assets/images/thumbnail-project-6-large.webp'
import Entertainnement from '../../../public/assets/images/thumbnail-project-4-large.webp'
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
                    <a href="https://lucaszebre.github.io/Galleria-App/" target="_blank"><img className="ImageProjets"src={galleria} alt="galleria-app" /></a>
                    <div className="ProjetsName">ART GALLERY SHOWCASE</div>
                    <div className="ProjetsTechno">React.js Html Css </div>
                </div>
                <div className="ProjetsCard">
                    <a href="https://lucaszebre.github.io/EntertainnementApp/" target="_blank"><img  className="ImageProjets" src={Entertainnement} alt="EntertainnementWeb-app" /></a>
                    <div className="ProjetsName">ENTERTAINNEMENT WEB APP</div>
                    <div className="ProjetsTechno">React.js Html Css </div>
                </div>
            </div>
        </div>
    </div>
        
    </>
    )
}

export default Projets
