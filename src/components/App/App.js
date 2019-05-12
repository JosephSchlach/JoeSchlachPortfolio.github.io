import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Resume from '../Resume/Resume';
import Develop from '../Develop/Develop';
import DesignWork from '../DesignWork/DesignWork';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
          <head>
            <title>J.Schlachtenhaufen</title>
          </head>
        <div>
        <body>
          <selection class="hero">
            <div class="hero-inner">
              <h1>JOSEPH SCHLACHTENHAUFEN</h1>
              <h4 className="h4Hero">715.456.4923 - JDSchlach@gmail.com</h4>
            </div>
          </selection>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route
              exact
              path="/home"
              component={Resume}
            />
            <Route
              exact
              path="/dev"
              component={Develop}
            />
             <Route
              exact
              path="/design"
              component={DesignWork}
            />
          </Switch>
          </body>
        </div>
      </Router>
    );
  }
}

export default App;
