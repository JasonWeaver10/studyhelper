// addQuestion.jsx

import React,  { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Layout from './layout';
import { safeCredentials } from '@utils/fetchHelper';
import './addQuestion.scss';

class AddQuestion extends Component {
  constructor() {
    super();
    this.state= {
      question: "",
      correct: '',
      false1: '',
      false2: '',
      false3: '',
      hint: '',
      topic_id: 0,
      topics: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  };

  componentDidMount() {
    fetch("./api/topics", safeCredentials({
    }))
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      this.setState({ topics: data.topics })
      });
  };

  handleChange(e) {
   const name = e.target.id
   this.setState({[`${name}`]: e.target.value});
  };

  renderSelect() {
    const { topics } = this.state
    if (!topics) return null
    const result = []
    topics.forEach(topic => {
      result.push(
        <option value={topic.id} key={topic.id}>{topic.name}</option>
      )
    });
    return result;
  }  

  handleSelect(e) {
    const topic_id = e.target.value
    this.setState({ topic_id: topic_id})
    console.log(topic_id)
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      question: this.state.question,
      answer: this.state.correct,
      wrong_answer_1: this.state.false1,
      wrong_answer_2: this.state.false2,
      wrong_answer_3: this.state.false3,
      hint: this.state.hint,
      topic_id: this.state.topic_id
    };

    fetch('./api/problems', safeCredentials({
      method: "POST",
      body: JSON.stringify(data)
    }));
  };


  render() {
    return (
      <Layout>
        <h1>Add A New Question </h1>
        <div className="container main-container">
          <div className="main-content">
            <div className="topic-select">
              <h4>What topic is this question for?</h4>
              <select name="topics" id="topics" onChange={this.handleSelect}>
                {this.renderSelect()}
              </select>
            </div>
            <div className="answer">
              <label htmlFor="question">Question:</label>
              <textarea type="text-area" id="question" required
              value={this.state.question}
              onChange={this.handleChange}/>
            </div>
            <div className="answer">
              <label htmlFor="correct">Correct Answer:</label>
              <textarea type="textarea" id="correct" required
              value={this.state.correct}
              onChange={this.handleChange}/>
            </div>
            <div className="answer">
              <label htmlFor="false#1">False Answer:</label>
              <textarea type="textarea" id="false1" required
              value={this.state.false1}
              onChange={this.handleChange}/>
            </div>
            <div className="answer">
            <label htmlFor="false#2">False Answer:</label>
            <textarea type="textarea" id="false2" required
            value={this.state.false2}
            onChange={this.handleChange}/>
            </div>
            <div className="answer">
              <label htmlFor="false#3">False Answer:</label>
              <textarea type="textarea" id="false3" required
              value={this.state.false3}
              onChange={this.handleChange}/>
            </div>
            <div className="answer">
              <label htmlFor="hint">Hint:</label>
              <textarea type="textarea" id="hint" required
              value={this.state.hint}
              onChange={this.handleChange}/>
            </div>
          </div> 
          <div className="side-panel">
            <div className="top-spacer">
            </div>
            <div className="button-div">
              <button className="btn btn-success" onClick={this.handleSubmit}>Add Question</button>
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