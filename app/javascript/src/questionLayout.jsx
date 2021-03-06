// questionLayout.jsx

import React from 'react';
import HighScore from './highScore';
import QuestionWidget from './questionWidget';
import './questionLayout.scss';
import { safeCredentials } from '@utils/fetchHelper';
import Hint from './hint';

class QuestionLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problems: [],
      question: '',
      answer: '0',
      false1: '1',
      false2: '2',
      false3: '3',
      hint: '',
      selection: '',
      questionNum: 1,
      showHint: false,
      finished: false,
      correct: 0,
      answered: false,
      result: ''
    }
    this.handleNext = this.handleNext.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleHighScoreUpdate = this.handleHighScoreUpdate.bind(this);
  }

  componentDidMount(){
    const questionNum = this.state.questionNum
    this.setState({
      problems: this.props.problems,
      question: this.props.problems[(questionNum)].question,
      answer: this.props.problems[(questionNum)].answer,
      false1: this.props.problems[(questionNum)].wrong_answer_1,
      false2: this.props.problems[(questionNum)].wrong_answer_2,
      false3: this.props.problems[(questionNum)].wrong_answer_3,
      hint: this.props.problems[(questionNum)].hint
    })
  }

  handleSelect(e) {
    const selection = e.target.id
    this.setState({
      selection: selection
    })
  }

  handleSubmit() {
    const selection = this.state.selection
    const correct = this.state.correct
    if (this.state.answer == selection) {
      this.setState({
        correct: correct + 1,
        result: '✅',
        answered: true
      })
    } else {
      this.setState({
        result: '❌',
        answered: true
      })
    } 
  }

  handleNext() {
    const { problems, questionNum  }= this.state
    if (problems.length -1 > questionNum) {
      this.setState({
        questionNum: (questionNum + 1)
      })
      this.setState({
        question: problems[(questionNum + 1)].question,
        answer: problems[(questionNum + 1)].answer,
        false1: problems[(questionNum + 1)].wrong_answer_1,
        false2: problems[(questionNum + 1)].wrong_answer_2,
        false3: problems[(questionNum + 1)].wrong_answer_3,
        hint: problems[(questionNum + 1)].hint,
        answered: false
      })
    } else {
      this.setState({
        finished: true
      })
    }
  }

  handleHighScoreUpdate() {
    const oldScore = this.props.high_score
    const newScore = this.state.correct
    const topic = this.props.topic
    if (newScore > oldScore ) {
      const data = {
        high_score: newScore
      }
      fetch(`../api/topics/` + topic , safeCredentials({
        method: "PUT",
        body: JSON.stringify(data)
      }))
    }
  }

  render(){

    if (this.state.finished == true) {
      this.handleHighScoreUpdate();
      return (
          <div className="container main-container">
            <section className = "main-content">
              <div className="finished">
                <h3>You have completed the quiz!</h3>
                <h4>You answered {this.state.correct} / {this.state.problems.length -1} questions correctly</h4>
                <button className="btn btn-warning" onClick={this.props.handleReset}>Try another quiz</button>
              </div>
            </section>
            <div className="high-score">
              <HighScore/>
            </div>
          </div>
      )

    } if (this.state.answered == false) {
      return (
        <div>
          <div className="container main-container">
            <div className="main-content">
              <QuestionWidget
                  question = {this.state.question}
                  answer = {this.state.answer}
                  false1 = {this.state.false1}
                  false2 = {this.state.false2}
                  false3 = {this.state.false3}
                  selection = {this.state.selection}
                  handleSelect = {this.handleSelect}
                  questionNum = {this.state.questionNum}
                  correct = {this.state.correct}
                  key = {this.state.question}
                />
                <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
            </div>
            <div className="high-score rounded">
              <div className="hint-div">
                <Hint 
                  hint = {this.state.hint}
                  key = {this.state.question}
                />
              </div>
              <HighScore/>
            </div>
          </div>
        </div>
      )
    } if (this.state.answered == true) {
        return (
        <div>
          <div className="container main-container">
            <div className="main-content">
              <QuestionWidget
                question = {this.state.question}
                answer = {this.state.answer}
                false1 = {this.state.false1}
                false2 = {this.state.false2}
                false3 = {this.state.false3}
                selection = {this.state.selection}
                handleSelect = {this.handleSelect}
                questionNum = {this.state.questionNum}
                correct = {this.state.correct}
                key = {this.state.question}
              />
              <button className="btn btn-success" onClick={this.handleNext}> Next Question</button>
            </div>
            <div className="high-score rounded">
              <div className="hint-div">
                <span>{this.state.result}</span>
              </div>
              <HighScore/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default QuestionLayout;