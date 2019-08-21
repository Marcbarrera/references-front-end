import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth.js';

class Navbar extends Component {
  render() {  
    return (
      <div id="header">
        <div class="navbar">
          {this.props.isLoggedIn ? (
            <>
              <Link to='/private'><p>profile</p></Link>
              <p onClick={this.props.logout}>Logout</p>
            </>
          ) : (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Signup</Link>
            </>
          )}
          
        </div>
        <div class="header-bottom">
            <Link to='/'><h1>Reference</h1></Link>
          </div>
        </div>
    )            

  }
}

export default withAuth(Navbar);