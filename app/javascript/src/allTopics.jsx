// allTopics.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import HighScore from './highScore'
import './allTopics.scss';

class AllTopics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problems: [],
      question: '',
      answer: '',
      false1: '',
      false2: '',
      false3: '',
      hint: '',
      selection: '',
      questionNum: 1
    }
  }
  
  render(){

    return (

      <Layout>
        <h1>All Topics</h1>
        <div className="container main-container">
          <div className="main-content">
            <div className='heading-div'>
              <h2>Question: {this.state.questionNum}</h2>
              <hr></hr>
              <h3>Question blah blah</h3>
            </div>
            <div className="answer-content">
              <div className="answer rounded">
                <input type="radio" className="radio" name="answers"/>
                <p>answer #1</p>

              </div>
              <div className="answer rounded">
                <input type="radio" className="radio" name="answers"/>
                <p>answer #2</p>
              </div>
              <div className="answer rounded">
                <input type="radio" className="radio" name="answers"/>
                <p>answer #3</p>
              </div>
              <div className="answer rounded">
                <input type="radio" className="radio" name="answers"/>
                <p>answer #4</p>
              </div>

            </div>
          </div>
          <div className="high-score rounded">
            <HighScore/>
            <div className="photo-div">
            </div>
            <button className="btn btn-success"> Submit</button>
          </div>
        </div>
      </Layout>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AllTopics />,
    document.body.appendChild(document.createElement('div')),
  )
})