import React from 'react';
import "./Footer.css"
import logo from '../../assets/LOGO.png';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

export default function Footer() {
    return(
        <div className='container'> 
            <div className='PinkBox'>
                <div className='upper'>
                    <div className='title'>
                        <img src={logo} alt="CACCO"/>
                        <h1>Centro Acadêmico de Ciências da Computação</h1>
                    </div>
                    
                    <div className='column'>
                        <h4>Endereço</h4>
                        <ul className='address-details'>
                            <li>Av. 24 nº 1515,</li>
                            <li>Bela Vista,</li>
                            <li>Rio Claro - SP,</li>
                            <li>IGCE, Unesp.</li>
                        </ul>
                        
                    </div>
                    
                    <div className='column'>
                        <h4>Telefone</h4>
                        <ul className='phone-numbers'>
                            <li>(19) 3944-1551</li>
                        </ul>
                    </div>
                    
                    <div className='column'>
                        <h4>Contato</h4>
                        <ul>
                            <a href = "https://www.w3schools.com/">email.com.br</a>
                            <br/>
                            <div className='icons'>   
                            <a href = "https://www.w3schools.com/">
                                <BsInstagram size={30} color='#000'/>
                            </a>
                            </div>
                            <div className='icons'>
                            <a href = "https://www.w3schools.com/">    
                                <BsFacebook size={30} color='#000'/>
                            </a>
                            </div>
                        </ul>
                    </div>

                </div>

                <div className='lower'>
                    <div className="bottomCACCo">
                        <h3>CACCo &copy;{new Date().getFullYear()}</h3>
                        <h3>Unesp Rio Claro</h3>
                        <h3>Desenvolvido por <a href="https://infojrunesp.com.br/">InfoJr</a></h3>
                    </div>
                </div>             
            </div>  
        </div>
    );
}