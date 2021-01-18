// logout.jsx
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Layout from './layout';
import "./logout.scss";

class Logout extends React.Component {
  constructor() {
    super();
    this.state = {
      login: true,
    }
  }

  render(){
    return (
      <Layout>
        <div className="main-container">
          <div className="main-content">
            <h3>Are you sure you want to log out?</h3>
            <button className="btn btn-danger">Log Out</button>
          </div>
        </div>
      </Layout>
    )
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Logout />,
    document.body.appendChild(document.createElement('div')),
  )
})