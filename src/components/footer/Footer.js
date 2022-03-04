import React from 'react';
import "./Footer.css"
import logo from '../../assets/LOGO.png';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

export default function Footer() {
    return(
        <div className='container'> 
            <div className='PinkBox'>
                <div className='upper'>
                    <div className='logo'>
                        <img src={logo} alt="logo"/>
                    </div>    
                    <div className="slogan1">
                        Quem nao gosta de doces? Por isso fazemos os melhores para voce!
                    </div>
                    <div className="contatos">
                        <a href = "https://www.instagram.com/cakkehome/">
                            <BsInstagram size={28} color='#000'/>
                        </a>
                    </div>
                    <div className="contatos">
                        <a href = "https://www.facebook.com/cakkehome">    
                            <BsFacebook size={28} color='#000'/>
                        </a>
                    </div>
                    <div className="contatos">
                        <a href = "https://wa.me/5519992678295">    
                             <BsWhatsapp size={28} color='#000'/>
                        </a>
                    </div>                
                </div>
                <div className='lower'>
                    <div className="direitos">
                        <h3>Powered By <a href="https://www.linkedin.com/in/victor-rocha-8b39ba21a/" style={{ color: 'var(--color-text)' }}>Victor Mariano Rocha</a></h3>
                        <h3>&copy;{new Date().getFullYear()} Cake Home Todos os direitos reservados</h3>
                    </div>
                </div>             
            </div>  
        </div>
    );
}