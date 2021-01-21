// addTopic.jsx
import React,  { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Layout from './layout';
import './addTopic.scss';
import { safeCredentials } from '@utils/fetchHelper'

class AddTopic extends Component {
  constructor() {
    super();
    this.state= {
      topic: '',
      question: "",
      correct: '',
      false1: '',
      false2: '',
      false3: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
   const name = e.target.id
   this.setState({[`${name}`]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: this.state.topic,
      high_score: 0,
      user_id: 1
    }
    fetch('./api/topics', safeCredentials({
      method: "POST",
      body: JSON.stringify(data)
    }) )
  }


  render() {
    return (
      <Layout>
        <h1>Add A New Topic </h1>
        <div className="container main-container">
          <div className="main-content">
            <div className="answer">
              <label htmlFor="question">Topic Name:</label>
              <textarea type="text-area" id="topic"
              value={this.state.topic}
              onChange={this.handleChange}/>
            </div>
            <div className="button-div">
              <button className="btn btn-success" onClick={this.handleSubmit}>Add Topic</button>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AddTopic />,
    document.body.appendChild(document.createElement('div')),
  )
})