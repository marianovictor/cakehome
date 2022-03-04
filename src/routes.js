import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/home/home';
import Menu from './pages/menu/menu';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import Fotos from './pages/photos/photos';

export default function Routes() {
    return(
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/Sobre" component={About}/>
              <Route path="/Contato" component={Contact}/>
              <Route path="/Cardapio" component={Menu}/>
              <Route path="/Fotos" component={Fotos}/>
          </Switch>    
        </BrowserRouter>
    );
}