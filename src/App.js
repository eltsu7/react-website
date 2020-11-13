import React from 'react'
import About from './About.js'
import CV from './CV.js'
import './css/App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav class='content-container'>
          <ul>
            <li class="link-item">
              <Link to="/" id='link'>Home</Link>
            </li>
            <li class="link-item">
              <Link to="/CV" id='link'>CV</Link>
            </li>
            <li class="link-item">
              <a id='link' target="_blank" rel="noopener noreferrer" href="https://github.com/eltsu7/">GitHub</a>
            </li>
            <li class="link-item">
              <a id='link' target="_blank" rel="noopener noreferrer" href="https://eeli.kuvat.fi/">Gallery</a>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/CV">
            <CV />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
