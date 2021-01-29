// quizSelector.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import { safeCredentials } from '@utils/fetchHelper';
import './quizSelector.scss';

class QuizSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      topicChoice: '',
      allTopics: false
    }
    this.selectOne = this.selectOne.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  } 

  componentDidMount() {
    fetch('http://localhost:3000/api/topics', safeCredentials({

    }))
    .then((response) => response.json())
    .then((data) => {
      this.setState({ 
        topics: data.topics
      })
    })
  }

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
  
  handleChange(e) {
    this.setState({topicChoice: e.target.id});
  }

  selectAll(e) {
    this.setState({ allTopics: true})
    console.log(this.state.allTopics);
  }

  selectOne(e) {
    this.setState({ allTopics: false })
    console.log(this.state.allTopics);
  }


  handleSubmit() {
    if (this.state.allTopics == true) {
      window.location = './allTopics';
    } else {
      window.location = `./oneTopic/${this.state.topicChoice}`
    }
  }


  render(){
    return (
      <Layout>
        <div className="container main-container">
          <div className="main-content">
            <div className="text-div">
              <h1>Which Topic would you like to be Quizzed on?</h1>
              <input type="radio" name="quiz-select" onClick={this.selectOne}></input>
              <h3>I want to be quizzed on:</h3>
              <select onChange={this.handleChange}>
                {this.renderSelect()}
              </select>
              <p>or</p>
              <input type="radio" name="quiz-select" onClick={this.selectAll}></input>
              <h3>I want to be quizzed on everything!</h3>
            </div>
            <button className="submit btn btn-success" type="submit" onClick={this.handleSubmit}>Get Started!</button>
          </div>
        </div>
      </Layout>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <QuizSelector />,
    document.body.appendChild(document.createElement('div')),
  )
})