import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth.js';

class UserNav extends Component {
  render() {  
    return (
        <>
        {this.props.user.username ? (
                    <>
                    <section className="private-menu">
                       <h1>Welcome {this.props.user.username}</h1>
                        <Link to={'/create'}>Create a post</Link>
                        <Link to={'/Myposts'}>My posts</Link>
                        <Link to={'/private'}>Profile</Link>
                        <Link to={'/{this.props.user._id}'}>Edit profile</Link>
                        </section>
                    </>
                ) : null }
                     </>
    )
  }
}

export default withAuth(UserNav);