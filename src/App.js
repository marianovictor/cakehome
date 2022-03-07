import './App.css';
import './components/footer/Footer.css';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/navbar';

export default function App() {
  return(
    <Router>
      <Switch>
      <div className='container'>
        <div className='Header'>
          <NavBar/>
        </div>
        <div className='Body'> 
          <Routes/>
        </div>
        <footer>
          <Footer/>
        </footer>
      </div>
      </Switch>
    </Router>
  );
}
  

