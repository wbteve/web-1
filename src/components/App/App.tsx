import * as React from "react";
import TopBarContainer from '../TopBar/TopBarContainer';
import Splash from '../Splash';
import Terms from '../Terms';
import Privacy from '../Privacy';
import About from '../About';
import FAQ from '../FAQ';
import Contact from '../Contact';
import Unauthorized from '../Unauthorized';
import Home from '../Home/Home';

let Loader = require('halogen/PulseLoader');
let AuthWrapper = require('redux-auth-wrapper').UserAuthWrapper;

import AppState from './AppState'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import { Layout } from "../Layout/Layout"

const LoggedIn = AuthWrapper({
  authSelector: (state:any) => state,
  failureRedirectPath: '/login',
  wrapperDisplayName: 'LoggedIn',
  predicate: (user:any) => true
})

export class App extends React.Component <AppState, {}> {
    render() {
        return (
          <Router history={hashHistory}>
              <Route path="/" component={Layout}>
                <IndexRoute component={Splash}></IndexRoute>
                <Route path="tos" component={Terms}></Route>
                <Route path="privacy" component={Privacy}></Route>
                <Route path="faq" component={FAQ}></Route>
                <Route path="about" component={About}></Route>
                <Route path="contact" component={Contact}></Route>
                <Route path="home" component={LoggedIn(Home)}></Route>
              </Route>
          </Router>
        );
    }
}