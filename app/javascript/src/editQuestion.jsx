// editQuestion.jsx
import React,  { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Layout from './layout';
import { safeCredentials } from '@utils/fetchHelper';
import './editQuestion.scss';

class EditQuestion extends Component {
  constructor() {
    super();
    this.state= {
      question: '',
      correct: '',
      false1: '',
      false2: '',
      false3: '',
      hint: '',
      id: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const str = window.location.href
    const id = str.replace('https://jasonsstudyhelper.herokuapp.com/editQuestion/', "");
    fetch(`/api/problems/${id}`, safeCredentials({

    }))
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        question: data.problem.question,
        correct: data.problem.answer,
        false1: data.problem.wrong_answer_1,
        false2: data.problem.wrong_answer_2,
        false3: data.problem.wrong_answer_3,
        hint: data.problem.hint,
        id: id,
      })
    })
  }

  handleChange(e) {
   const name = e.target.id
   this.setState({[`${name}`]: e.target.value});
  }

  async handleSubmit() {
    const id = this.state.id
    const data = {
      question: this.state.question,
      answer: this.state.correct,
      wrong_answer_1: this.state.false1,
      wrong_answer_2: this.state.false2,
      wrong_answer_3: this.state.false3,
      hint: this.state.hint,
    }
     await fetch('/api/problems/'+ id , safeCredentials({
      method: "PUT",
      body: JSON.stringify(data)
    }))
    window.location = '/questions'
  }


  render() {
    return (
      <Layout>
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
            <div className="answer">
              <label htmlFor="hint">Hint</label>
              <textarea type="textarea" id="hint"
              value={this.state.hint}
              onChange={this.handleChange}/>
            </div>
          </div> 
          <div className="side-panel">
            <div className="top-spacer">
            </div>
            <div className="button-div">
              <button className="btn btn-success" onClick={this.handleSubmit}>Update Question</button>
            </div>
          </div> 
        </div>
      </Layout>
    )
  }
}
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <EditQuestion />,
    document.body.appendChild(document.createElement('div')),
  )
})