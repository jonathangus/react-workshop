import React from 'react';
import Home from './Home';
import About from './About';
import { Router, Route, Link, browserHistory } from 'react-router';
import User from './User';
import Root from './Root';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={Root}>
            <Route path="about" component={About}/>
            <Route path="about/:userID" component={User}/>
          </Route>
          <Route path="*" component={Home}/>
        </Router>
      </div>
    )
  }
}
