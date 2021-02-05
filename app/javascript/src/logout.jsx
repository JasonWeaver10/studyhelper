// logout.jsx
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Layout from './layout';
import { safeCredentials } from "@utils/fetchHelper";
import "./logout.scss";

class Logout extends React.Component {
  constructor() {
    super();
    this.state = {
      user_id: '',
      authenticated: false,
      session_id: 0
    }
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    fetch('./api/authenticated', safeCredentials({
    }))
    .then((response) => response.json())
    .then((data) => {
      if (data.authenticated == false) {
        this.setState({
          authenticated: false
        });
      } else {
        this.setState({
          user_id: data.session.id,
          authenticated: true,
          session_id: data.session.session_id
        })
      }
    })
  }

  handleLogout() {
    console.log("logged-out");
    const session = this.state.session_id
    fetch('./api/sessions/' + session , safeCredentials({
      method: 'DELETE',
    }));
    this.setState({ authenticated: false })
  }

  render(){

    if (this.state.authenticated == true) {
      return (
        <Layout>
          <div className="main-container">
            <div className="main-content">
              <h3>Are you sure you want to log out?</h3>
              <button className="btn btn-danger" onClick={this.handleLogout}>Log Out</button>
            </div>
          </div>
        </Layout>
      )
    } else {
      return (
        <Layout>
          <div className="main-container">
            <div className="main-content">
              <h3>You Have Successfully Logged out!</h3>
            </div>
          </div>
        </Layout>
      )
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Logout />,
    document.body.appendChild(document.createElement('div')),
  )
})