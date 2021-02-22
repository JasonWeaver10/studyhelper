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
      authenticated: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
  } 
   
  componentDidMount(){
    fetch('../api/authenticated', safeCredentials({
    }))
    .then((response) => response.json())
    .then((data) => {
      if (data.authenticated == false) {
        this.setState({ authenticated: false})
      } else {
        this.setState({
          authenticated: true
        })
      }
    })
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const loginType = urlParams.get('l')
    if (loginType == "r") {
      this.setState({login: true})
    }
  } 

  async handleLogin(){
    const data = {
      password: this.state.password,
      email: this.state.email
    }
    await fetch('../api/sessions', safeCredentials({
      method: 'POST',
      body: JSON.stringify(data)
    }));
     window.location = '/quizType'
  }

  toggleLogin(e) {
    const login = this.state.login;
    this.setState({login: !login});
  }

  handleChange(e) {
    const value = e.target.id;
    this.setState({[`${e.target.id}`]: e.target.value})
  }
  
  async handleSignUp() {
    const data = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }
    await fetch('./api/users', safeCredentials({
      method: 'POST',
      body: JSON.stringify(data)
    }));
    await this.handleLogin();
    window.location = '/quizType'
  }

  render() {
    const {login, authenticated } = this.state;
    if (authenticated) {
      return (
        <Layout>
          <div className="main-container">
            <div className="logged-in">
              <div className="h1-wrapper">
                <h1>You are already Logged in!</h1>
              </div>
            </div>
          </div>
        </Layout>
      )
    } else {
      if (login) {
        return(
          <Layout>
            <div className="main-container">
              <div className="main-content">
                <h3>Please Log in to continue</h3>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" required onChange={this.handleChange}/>
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" type="password" required onChange={this.handleChange}/>
                <button className="btn btn-success" onClick={this.handleLogin}>Log In</button>
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
              <input type="text" id="email" onChange={this.handleChange}/>
              <label htmlFor="username" required>Username:</label>
              <input type="text" id="username" onChange={this.handleChange}/>
              <label htmlFor="password">Password:</label>
              <input type="text" id="password" type="password" required onChange={this.handleChange}/>
              <button onClick={this.handleSignUp}className="btn btn-success">Sign Up</button>
              <button onClick={this.toggleLogin} className="btn btn-warning">I already have an account</button>
            </div>
          </div>
        </Layout>
        );
      }
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Login />,
    document.body.appendChild(document.createElement('div')),
  )
})