import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
