// allTopics.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import HighScore from './highScore'
import { safeCredentials } from '@utils/fetchHelper'
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
      hint: 'here is your hint',
      selection: '',
      questionNum: 1,
      showHint: false,
      finished: false,
      currentScore: 0
    }
    this.handleNext = this.handleNext.bind(this);
    this.showHint = this.showHint.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount(){
    await fetch('./api/problems', safeCredentials({
    }))
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        problems: data.problems
      })
    })
    let unshuffled = this.state.problems
    let shuffled = unshuffled
    .map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    const questionNum = this.state.questionNum
    this.setState({
      problems: shuffled,
      question: shuffled[(questionNum)].question,
      answer: shuffled[(questionNum)].answer,
      false1: shuffled[(questionNum)].wrong_answer_1,
      false2: shuffled[(questionNum)].wrong_answer_2,
      false3: shuffled[(questionNum)].wrong_answer_3,
      hint: shuffled[(questionNum)].hint
    })
  }

  handleSubmit() {
    
  }

  handleNext() {
    const { problems, questionNum  }= this.state
    if (problems.length -1 > questionNum) {
      this.setState({
        questionNum: (questionNum + 1)
      })
      this.setState({
        question: problems[(questionNum)].question,
        answer: problems[(questionNum)].answer,
        false1: problems[(questionNum)].wrong_answer_1,
        false2: problems[(questionNum)].wrong_answer_2,
        false3: problems[(questionNum)].wrong_answer_3,
        hint: problems[(questionNum)].hint
      })
    } else {
      this.setState({
        finished: true
      })
    }
    
  }

  showHint(e) {
    e.preventDefault();
    this.setState({showHint: true});
  }

  render(){

    if (this.state.showHint == false) {
      return (
        <Layout>
          <h1>All Topics</h1>
          <div className="container main-container">
            <div className="main-content">
              <div className='heading-div'>
                <h2>Question: {this.state.questionNum}</h2>
                <hr></hr>
                <h3>{ this.state.question}</h3>
              </div>
              <div className="answer-content">
                <div className="answer rounded">
                  <input type="radio" className="radio" name="answers"/>
                  <p> { this.state.answer }</p>

                </div>
                <div className="answer rounded">
                  <input type="radio" className="radio" name="answers"/>
                  <p> { this.state.false1 }</p>
                </div>
                <div className="answer rounded">
                  <input type="radio" className="radio" name="answers"/>
                  <p> { this.state.false2 }</p>
                </div>
                <div className="answer rounded">
                  <input type="radio" className="radio" name="answers"/>
                  <p>{ this.state.false3 }</p>
                </div>
                <button className="btn btn-warning" onClick={this.showHint}>I need a hint!</button>
              </div>
            </div>
            <div className="high-score rounded">
              <HighScore/>
              <div className="photo-div">
              </div>
              <button className="btn btn-success" onClick={this.handleSubmit}> Submit</button>
            </div>
          </div>
        </Layout>
      )
    } else {
      return (
        <Layout>
          <h1>All Topics</h1>
          <div className="container main-container">
            <div className="main-content">
              <div className='heading-div'>
                <h2>Question: {this.state.questionNum} </h2>
                <hr></hr>
                <h3>{ this.state.question }</h3>
              </div>
              <div className="answer-content">
                <div className="answer rounded">
                  <input type="radio" className="radio" name="answers"/>
                  <p> { this.state.answer }</p>

                </div>
                <div className="answer rounded">
                  <input type="radio" className="radio" name="answers"/>
                  <p> { this.state.false1 }</p>
                </div>
                <div className="answer rounded">
                  <input type="radio" className="radio" name="answers"/>
                  <p>{ this.state.false2 }</p>
                </div>
                <div className="answer rounded">
                  <input type="radio" className="radio" name="answers"/>
                  <p>{ this.state.false3 }</p>
                </div>
                <div className="hint-div answer"> 
                  <p>{ this.state.hint }</p>
                </div>
              </div>
            </div>
            <div className="high-score rounded">
              <HighScore/>
              <div className="photo-div">
              </div>
              <button className="btn btn-success" onClick={this.handleNext}> Submit</button>
            </div>
          </div>
        </Layout>
      )
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AllTopics />,
    document.body.appendChild(document.createElement('div')),
  )
})