import React, {Component} from 'react'
import {AuthContext} from '../contexts/auth-context.js';

const withAuth = (Comp) => {
  return class WithAuth extends Component {
    render() {
      return(
        <AuthContext.Consumer>
          {({user, isLoggedIn, login, signup, logout, getMe}) => (
            <Comp  
            user={user} 
            isLoggedIn={isLoggedIn} 
            login={login}
            signup={signup}
            logout={logout}
            getMe={getMe}
            {...this.props}
            />
          )}
        </AuthContext.Consumer>
      )
    }
  }
}

export default withAuth;