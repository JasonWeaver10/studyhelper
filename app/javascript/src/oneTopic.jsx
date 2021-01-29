// oneTopic.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import HighScore from './highScore';
import QuestionWidget from './questionWidget';
import { safeCredentials } from '@utils/fetchHelper';
import './oneTopic.scss';

class OneTopic extends React.Component {
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
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  } 

  componentDidMount() {
    fetch('http://localhost:3000/api/topicProblems/1', safeCredentials({

    }))
    .then((response) => response.json())
    .then((data) => {
      this.setState({ 
        problems: data.problems,
        question: data.problems[0].question,
        answer: data.problems[0].answer,
        false1: data.problems[0].wrong_answer_1,
        false2: data.problems[0].wrong_answer_2,
        false3: data.problems[0].wrong_answer_3,
      })
    })
  }

  handleChange(e) {

  }

  handleSubmit(e) {

  }

  render(){
    return (
      <Layout>
        <div className="container main-container">
          <QuestionWidget/>
          <div className="high-score">
            <HighScore/>
            <button className="btn btn-success" onClick={this.handleSubmit}> Submit</button>
          </div>
        </div>
      </Layout>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <OneTopic />,
    document.body.appendChild(document.createElement('div')),
  )
})