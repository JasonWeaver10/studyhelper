// allTopics.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import HighScore from './highScore'
import './allTopics.scss';

const AllTopics = () => (
  <Layout>
    <h1>All Topics</h1>
    <div className="container main-container">
      <div className="main-content">
        <h2>Question: 1</h2>
        <h3>Question blah blah</h3>
        <div className="answer-content">
          <div className="answer">
            <input type="radio" className="radio" name="answers"/>
            <p>answer #1</p>

          </div>
          <div className="answer">
            <input type="radio" className="radio" name="answers"/>
            <p>answer #2</p>
          </div>
          <div className="answer">
            <input type="radio" className="radio" name="answers"/>
            <p>answer #3</p>
          </div>
          <div className="answer">
            <input type="radio" className="radio" name="answers"/>
            <p>answer #4</p>
          </div>
        </div>
      </div>
      <div className="high-score">
        <HighScore/>
        <button className="btn btn-success"> Submit</button>
      </div>
    </div>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AllTopics />,
    document.body.appendChild(document.createElement('div')),
  )
})