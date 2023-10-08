import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Play from "./components/Play";
import TestPage from "./pages/TestPage";
import TestPage2 from "./components/TestPage2";

import 'bootstrap/dist/css/bootstrap.min.css';



import useLocalStorage from 'use-local-storage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.getElementsByTagName('html')[0].className = theme;
    setTheme(newTheme)
  }
  document.getElementsByTagName('html')[0].className = theme;

  return (
    <Router>
      <div className="App" data-theme={theme}>
        <div className="App2">
          <Nav onClick={switchTheme} theme={theme} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/play" exact component={Play} />
            <Route path="/about" component={About} />
            <Route path="/testPage" component={TestPage} />
            <Route path="/testPage2" component={TestPage2} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
