// login.jsx
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Layout from './layout';
import { safeCredentials } from '@utils/fetchHelper';
import './login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false,
      username: '',
      password: '',
      email: '',
    }
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
  } 
   
  componentDidMount(){
  } 

  toggleLogin(e) {
    const login = this.state.login;
    this.setState({login: !login});
  }

  handleChange(e) {
    this.setState({[`${e.target.id}`]: e.target.value})
  }
  
  handleSignUp() {
    const data = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }
    fetch('./api/users', safeCredentials({
      method: 'POST',
      body: JSON.stringify(data)
    }));
    console.log(data);
  }

  render() {
    const login = this.state.login;
    if (login) {
      return(
        <Layout>
          <div className="main-container">
            <div className="main-content">
              <h3>Please Log in to continue</h3>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username"/>
              <label htmlFor="password">Password:</label>
              <input type="text" id="password"/>
              <button className="btn btn-success">Log In</button>
              <button className="btn btn-warning" onClick={this.toggleLogin}>I do not have an account</button>
            </div>
          </div>
        </Layout>
      )
    } else {
      return (
        <Layout>
        <div className="main-container">
          <div className="main-content">
            <h3>Please Sign up to continue</h3>
            <label htmlFor="email" required>Email:</label>
            <input type="text" id="email"/>
            <label htmlFor="username" required>Username:</label>
            <input type="text" id="username"/>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" required/>
            <button onClick={this.handleSignUp}className="btn btn-success">Sign Up</button>
            <button onClick={this.toggleLogin} className="btn btn-warning">I already have an account</button>
          </div>
        </div>
      </Layout>
      );
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Login />,
    document.body.appendChild(document.createElement('div')),
  )
})