// home.jsx
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Layout from './layout';
import './home.scss';

class Home extends React.Component {
  constructor(){
  super();
    this.state = {
      hello: ''
    }
  }

  render(){
    return (
      <Layout>
        <div className="main-container">
          <div className="main-content">
            <div className="welcome-info">
              <h1>Welcome to Study Helper!</h1>
              <p>Study helper is an app designed to help you study any subect that you want. Just input a topic, add questions, and then quiz yourself. Hints can be added to help you on tricky questions, and the high score will update as you progress. Save your old school tests, input them, and practice for final exams.
              </p>
              <p className="welcome-nav">Please <a href="./login">Log in</a> or <a href="./login">Sign Up</a> to get started</p> 
            </div>
                
          </div>
        </div>
      </Layout>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})