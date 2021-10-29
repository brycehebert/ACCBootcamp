import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./HomeComponent";
import About from "./AboutComponent"
import Contact from "./ContactComponent"

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <hr />
        </div>
      </div>
    </Router>
  );
}

export default App;
