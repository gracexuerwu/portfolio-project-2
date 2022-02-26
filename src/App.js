import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";

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
        <Nav onclick={switchTheme} />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
