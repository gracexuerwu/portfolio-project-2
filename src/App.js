import './App.css';
import Home from './components/Home';
import FeaturedProjects from './components/FeaturedProjects';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Home />
      <FeaturedProjects />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
