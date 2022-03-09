import React ,{useState}from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import './menu.css';

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var match = false, dropdown = dropdowns[i];
      if (event.target.classList.contains('dropbtn')) {
        for (var c of dropdown.classList.values()) {
          if (c.indexOf('menu-') == 0 && event.target.classList.contains(c)) {
            match = true; break;
          }
        }
      }
      if (match) {dropdown.classList.add('show');
      } else {dropdown.classList.remove('show');}
    }
  };

export default function Menu() {
    
    
    return(
        
        <div class="container">
            <div className="container">
            <div className="titlePag1"><h1>Cardapio</h1></div>
            <div className="genericContainer1">
                <div className="topicGeneric">
                </div>
            </div>
            <div className="genericContainer1">
                <div className="topicGeneric">
                    <div class="dropdown">
                        <button class="dropbtn menu-one">Dropdown One...................<AiFillCaretDown/></button>
                        <div id="myDropdown1" class="dropdown-content menu-one">
                            <p >Link One 1...................$$$</p>
                            <p >Link One 2...................$$$</p>
                            <p >Link One 3...................$$$</p>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn menu-two">Dropdown Two...................<AiFillCaretDown/></button>
                        <div id="myDropdown2" class="dropdown-content menu-two">
                            <p >Link Two 1...................$$$</p>
                            <p >Link Two 2...................$$$</p>
                            <p >Link Two 3...................$$$</p>
                        </div>
                      </div>
                      <div class="dropdown">
                        <button class="dropbtn menu-three">Dropdown three...................<AiFillCaretDown/></button>
                        <div id="myDropdown3" class="dropdown-content menu-three">
                            <p >Link Two 1...................$$$</p>
                            <p >Link Two 2...................$$$</p>
                            <p >Link Two 3...................$$$</p>
                        </div>
                      </div>
                      <div class="dropdown">
                        <button class="dropbtn menu-four">Dropdown four...................<AiFillCaretDown/></button>
                        <div id="myDropdown3" class="dropdown-content menu-four">
                            <p >Link Two 1...................$$$</p>
                            <p >Link Two 2...................$$$</p>
                            <p >Link Two 3...................$$$</p>
                        </div>
                      </div>
                      <div class="dropdown">
                        <button class="dropbtn menu-five">Dropdown five...................<AiFillCaretDown/></button>
                        <div id="myDropdown3" class="dropdown-content menu-five">
                            <p >Link Two 1...................$$$</p>
                            <p >Link Two 2...................$$$</p>
                            <p >Link Two 3...................$$$</p>
                        </div>
                      </div>
                      <div class="dropdown">
                        <button class="dropbtn menu-six">Dropdown six...................<AiFillCaretDown/></button>
                        <div id="myDropdown2" class="dropdown-content menu-six">
                            <p >Link Two 1...................$$$</p>
                            <p >Link Two 2...................$$$</p>
                            <p >Link Two 3...................$$$</p>
                        </div>
                      </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}