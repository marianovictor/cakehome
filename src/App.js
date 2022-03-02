import './App.css';
import './components/footer/Footer.css';
import Routes from './routes';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/navbar';

export default function App() {
  return(
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
  );
}
  

