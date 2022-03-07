import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/LOGO.png';
import './navbar.css';
import'../../App';

const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState (false);
  
  const Menu = () => (
    <>
        <button className="buttonAnimation"><a href='/' style={{ color: 'var(--color-text)' }}>Home</a></button>
        <button className="buttonAnimation"><a href='/Sobre' style={{ color: 'var(--color-text)' }}>Sobre nos</a></button>
        <button className="buttonAnimation"><a href='/Cardapio' style={{ color: 'var(--color-text)' }}>Cardapio</a></button>
        <button className="buttonAnimation"><a href='/Fotos' style={{ color: 'var(--color-text)' }}>Fotos</a></button>
        <button className="buttonAnimation"><a href='/Contato' style={{ color: 'var(--color-text)' }}>Contato</a></button>
    </>
  )

  return (
    <nav>
      <div className="Navbar">
          <div className="Navbar__Links">
            <div className="Navbar__Logo">
              <a href='/'><img src={logo} alt="logo"/></a>
            </div>
            <div className="Navbar__links__container">
              <ul className="NavbarList">
                <Menu/>  
              </ul>        
            </div>
          </div>
          <div className="navbar__menu">
            {toggleMenu ? <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)}/>
                      : <RiMenu3Line color="fff" size={27} onClick={() => setToggleMenu(true)}/>
            }
            {toggleMenu && (
              <div className="navbar__menu__container">
                <div className="navbar__menu__container__list">
                  <Menu/>
                </div>
              </div>
            )}
          </div>
      </div>
    </nav>
  );
};

export default NavBar;
