import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/LOGO.png';
import './navbar.css';
import'../../App';

const Menu = () => (
  <>
      <button className="buttonAnimation">Home</button>
      <button className="buttonAnimation">Sobre Nos</button>
      <button className="buttonAnimation">Cardapio</button>
      <button className="buttonAnimation">Contato</button>

  </>
)

const NavBar = () => {
const [toggleMenu, setToggleMenu] = useState (false);

  return (
  <div className="Navbar">
      <div className="Navbar__Links">
        <div className="Navbar__Logo">
          <img src={logo} alt="logo"/>
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
          <div className="navbar__menu__container scale-up-center">
            <div className="navbar__menu__container__list">
              <Menu/>
            </div>
          </div>
        )}
      </div>
  </div>
  );
};

export default NavBar;
