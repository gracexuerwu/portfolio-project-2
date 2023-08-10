import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Play from "./components/Play";

import useLocalStorage from 'use-local-storage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <Router>
      <div className="App" data-theme={theme}>
        <div className="App2">
          <Nav onClick={switchTheme} theme={theme} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/play" exact component={Play} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
