import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import home from './pages/home/home';
import menu from './pages/menu/menu';
import contact from './pages/contact/contact';
import about from './pages/about/about';

export default function Routes() {
    return(
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={home}/>
              <Route path="/Sobre" component={about}/>
              <Route path="/Contato" component={contact}/>
              <Route path="/Cardapio" component={menu}/>
          </Switch>    
        </BrowserRouter>
    );
}