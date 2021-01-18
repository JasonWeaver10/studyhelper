// addQuestion.jsx

import React,  { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Layout from './layout';
import './addQuestion.scss';

class AddQuestion extends Component {
  constructor() {
    super();
    this.state= {
      question: "What is 3 * 4?",
      correct: '',
      false1: '',
      false2: '',
      false3: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
   const name = e.target.id
   this.setState({[`${name}`]: e.target.value});
  }


  render() {
    return (
      <Layout>
        <h1>Add Question </h1>
        <div className="container main-container">
          <div className="main-content">
            <div className="answer">
              <label htmlFor="question">Question:</label>
              <textarea type="text-area" id="question"
              value={this.state.question}
              onChange={this.handleChange}/>
            </div>
            <div className="answer">
              <label htmlFor="correct">Correct Answer:</label>
              <textarea type="textarea" id="correct"
              value={this.state.correct}
              onChange={this.handleChange}/>
            </div>
            <div className="answer">
              <label htmlFor="false#1">False Answer:</label>
              <textarea type="textarea" id="false1"
              value={this.state.false1}
              onChange={this.handleChange}/>
            </div>
            <div className="answer">
            <label htmlFor="false#2">False Answer:</label>
            <textarea type="textarea" id="false2"
            value={this.state.false2}
            onChange={this.handleChange}/>
            </div>
            <div className="answer">
              <label htmlFor="false#3">False Answer:</label>
              <textarea type="textarea" id="false3"
              value={this.state.false3}
              onChange={this.handleChange}/>
            </div>
          </div> 
          <div className="side-panel">
            <div className="top-spacer">
            </div>
            <div className="button-div">
              <button className="btn btn-success">Add Question</button>
            </div>
          </div> 
        </div>
      </Layout>
    )
  }
}
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AddQuestion />,
    document.body.appendChild(document.createElement('div')),
  )
})