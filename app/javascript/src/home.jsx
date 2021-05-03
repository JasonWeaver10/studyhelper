// home.jsx
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Layout from './layout';
import './home.scss';

class Home extends React.Component {
  constructor(){
  super();
    
  }

  render(){
    return (
      <Layout>
        <section className="main-container">
          <div className="main-content">
            <div className="welcome-info">
              <h1 className="Home-title">Welcome to Study Helper!</h1>
              <p className="Home-info">Study helper is an app designed to help you study any subject that you want. Just input a topic, add questions, and then quiz yourself. Hints can be added to help you on tricky questions, and the high score will update as you progress. Save your old school tests, input them, and practice for final exams.
              </p>
              <p className="welcome-nav">Please <a href="./login/?l=r">Log in</a> or <a href="./login/?l=n">Sign Up</a> to get started</p> 
            </div>
                
          </div>
        </section>
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