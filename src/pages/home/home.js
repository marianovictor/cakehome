import React from 'react';
import './home.css';
import Carroseul, { CarouselItem }from '../../components/carroseulMain/carrouseul';
import logo from '../../assets/LogoRedondo.png';
import foto1 from '../../assets/testeFoto.jpg';
import foto2 from '../../assets/foto2.png';
import foto3 from '../../assets/foto3.png';
import foto4 from '../../assets/foto1.png';
import Fade from 'react-reveal/Fade';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';

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
                <h1><Link to='/Sobre' style={{ color: 'var(--color-text)' }}>Sobre nos</Link></h1>
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
                <h1><Link to='/Fotos' style={{ color: 'var(--color-text)' }}>Fotos</Link></h1>
                <div className="textPhotos">
                        <p>Esse voluptate id culpa culpa excepteur aute. Sunt reprehenderit deserunt sit cupidatat aute aliqua irure aute reprehenderit do veniam aliquip occaecat magna. Anim labore anim esse elit officia anim id veniam irure enim. Lorem anim sunt id cillum sit deserunt excepteur minim ipsum ut fugiat aute. Ad non irure aute sunt officia nisi duis tempor. Labore pariatur magna aute ad sunt.</p>
            </div>
            </div>
                <div className="PhotosContainer">  
                    <div className="Photos">
                            <Carroseul>
                                <CarouselItem><img src={foto1} alt="foto"/></CarouselItem>
                                <CarouselItem><img src={foto2} alt="foto"/></CarouselItem>
                                <CarouselItem><img src={foto3} alt="foto"/></CarouselItem>
                                <CarouselItem><img src={foto4} alt="foto"/></CarouselItem>
                            </Carroseul>
                    </div>
                </div>
            </Fade>
            <Fade right>
            <div className="titleAbout">
                <h1><Link to='/Cardapio' style={{ color: 'var(--color-text)' }}>Cardapio</Link></h1>
            </div>
                <div className="aboutUsContainer">
                    <div className="textAbout">
                        <p>Esse voluptate id culpa culpa excepteur aute. Sunt reprehenderit deserunt sit cupidatat aute aliqua irure aute reprehenderit do veniam aliquip occaecat magna. Anim labore anim esse elit officia anim id veniam irure enim. Lorem anim sunt id cillum sit deserunt excepteur minim ipsum ut fugiat aute. Ad non irure aute sunt officia nisi duis tempor. Labore pariatur magna aute ad sunt.</p>
                        <img src={logo} alt="logo"/>
                    </div>
                </div>
            </Fade>
            <Fade left>
            <div className="titleContato">
                <h1><Link to='/Contato' style={{ color: 'var(--color-text)' }}>Contato</Link></h1>
            </div>
                <div className="ContatoContainer">
                    <div className="textContato">
                    <div className="icons">
                        <a href = "https://www.instagram.com/cakkehome/" style={{ color: 'var(--color-text)' }}><BsInstagram size={28} color='#000'/>@cakkehome</a>
                        <br/>
                        <br/>
                        <a href = "https://www.facebook.com/cakkehome" style={{ color: 'var(--color-text)' }}><BsFacebook size={28} color='#000'/>cakkehome</a>
                        <br/>
                        <br/>
                        <a href = "https://wa.me/5519992678295" style={{ color: 'var(--color-text)' }}><BsWhatsapp size={28} color='#000'/>(19) 99267-8295</a>
                    </div>
                        <p>Esse voluptate id culpa culpa excepteur aute. Sunt reprehenderit deserunt sit cupidatat aute aliqua irure aute reprehenderit do veniam aliquip occaecat magna. Anim labore anim esse elit officia anim id veniam irure enim. Lorem anim sunt id cillum sit deserunt excepteur minim ipsum ut fugiat aute. Ad non irure aute sunt officia nisi duis tempor. Labore pariatur magna aute ad sunt.</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
}