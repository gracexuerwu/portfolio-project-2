import './App.css';
import Home from './components/Home';
import FeaturedProjects from './components/FeaturedProjects';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './components/About';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home />
      <FeaturedProjects />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
