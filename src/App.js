import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import Navbar from './components/Navbar.js';
import UserNav from './components/UserNav.js'
import PrivateRoute from './components/PrivateRoute.js';
import AnonRoute from './components/AnonRoute.js';

import Private from './pages/Private';
import Myposts from './pages/Myposts';

import Create from './pages/Create';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Detail from './pages/Detail';
import AuthProvider from './contexts/auth-context.js';

import './App.css';
// import 'milligram';

import firebase from "firebase";
 
const config = {
  apiKey: "AIzaSyCIVY3T_HsVvMg60HSvv_PtjvSU2I6cJKw",
  authDomain: "reference-b2f67.firebaseapp.com",
  storageBucket: "gs://reference-b2f67.appspot.com/"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <Router>

        <AuthProvider>
          <div className="container">
          <Navbar />
          <PrivateRoute exact path="/" component={Home} />

            <Switch>
              <AnonRoute path="/signup" component={Signup}/>
              <AnonRoute path="/login" component={Login}/>
              <PrivateRoute path="/private" component={Private}/>
              <PrivateRoute path="/create" component={Create}/>
              <PrivateRoute path="/myposts" component={Myposts}/>
              <PrivateRoute path="/detail/:id" component={Detail}/>
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
