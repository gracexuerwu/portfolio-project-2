import './App.css';
import Home from './components/Home';
import FeaturedProjects from './components/FeaturedProjects';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

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
