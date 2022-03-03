import React from 'react';
import './home.css';
import Carroseul, { CarouselItem }from '../../components/carroseul/carrouseul';
import logo from '../../assets/LogoRedondo.png';
import foto1 from '../../assets/testeFoto.jpg';
import Fade from 'react-reveal/Fade';

export default function Home() {
    return(
        <div className="container">
            <div className="slogan">
                <Fade left>
                    Quem nao gosta de doces? Por isso fazemos os melhores para voce!
                </Fade>
            </div>
            <Fade right>
            <div className="titleAbout">
                <h1>Sobre nos</h1>
            </div>
                <div className="aboutUsContainer">
                    <div className="textAbout">
                        <p>Esse voluptate id culpa culpa excepteur aute. Sunt reprehenderit deserunt sit cupidatat aute aliqua irure aute reprehenderit do veniam aliquip occaecat magna. Anim labore anim esse elit officia anim id veniam irure enim. Lorem anim sunt id cillum sit deserunt excepteur minim ipsum ut fugiat aute. Ad non irure aute sunt officia nisi duis tempor. Labore pariatur magna aute ad sunt.</p>
                        <img src={logo} alt="logo"/>
                    </div>
                </div>
            </Fade>
            <Fade left>
            <div className="titlePhotos">
                <h1>Fotos</h1>
                <div className="textPhotos">
                        <p>Esse voluptate id culpa culpa excepteur aute. Sunt reprehenderit deserunt sit cupidatat aute aliqua irure aute reprehenderit do veniam aliquip occaecat magna. Anim labore anim esse elit officia anim id veniam irure enim. Lorem anim sunt id cillum sit deserunt excepteur minim ipsum ut fugiat aute. Ad non irure aute sunt officia nisi duis tempor. Labore pariatur magna aute ad sunt.</p>
            </div>
            </div>
           
                <div className="PhotosContainer">
                    
                    <div className="Photos">
                            <Carroseul>
                                <CarouselItem><img src={foto1} alt="foto"/></CarouselItem>
                                <CarouselItem><img src={foto1} alt="foto"/></CarouselItem>
                                <CarouselItem><img src={foto1} alt="foto"/></CarouselItem>
                            </Carroseul>
                    </div>
                    
                </div>
            </Fade>
        </div>
    );
}