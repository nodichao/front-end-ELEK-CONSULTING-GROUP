//import{Footer} from './components/footer/Footer'
import { Outlet } from 'react-router-dom';
import './App.css';
import "./components/Connexion/Connexion.css";
import "./components/main/main.css";
import { Header } from './components/header/Header';

//import{Main} from './components/main/Main';

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
