import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    this.props.login({ username, password })
    .then( (user) => {
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password } = this.state;
    return (
      <section class="lo-sig-container">
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor='username' >Username:</label>
          <input id='username' type='text' name='username' value={username} onChange={this.handleChange}/>
          <label htmlFor='password'>Password:</label>
          <input id='password' type='password' name='password' value={password} onChange={this.handleChange} />
          <input type='submit' value='Login' />
        </form>

        <p>
            <Link to={'/signup'}> Signup</Link>
        </p>
      </section>
    )
  }
}

export default withAuth(Login);