// login.jsx
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Layout from './layout';
import './login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      login: true,
    }
  } 
   
  componentDidMount(){
    console.log(this.state.login);
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
            <label htmlFor="email">Email:</label>
            <input type="text" id="email"/>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username"/>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password"/>
            <button className="btn btn-success">Sign Up</button>
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