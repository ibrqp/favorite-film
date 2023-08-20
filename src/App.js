import {Col, Container, Row} from "react-bootstrap"
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingpage.css"
import Intro from "./components/Intro";
import Trending from "./components/Trending"
import Superhero from "./components/SuperHero";


function App() {
  return (
      <div>
        <div className="mybg">
        <NavigationBar />
        <Intro/>
        </div>
        <div className="trending">
          <Trending/>
        </div> 
        <div className="superhero">
          <Superhero/>
        </div> 
      </div>
    )
}

export default App;
