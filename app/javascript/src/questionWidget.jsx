// questionWidget.jsx
import React from 'react';
import './questionWidget.scss';

class QuestionWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problem: [],
      score: 0,
      high_score: 0,

    }
  } 

  componentDidMount() {
    console.log(this.state.problem);
  }

  render(){
    return (
          <div className="main-content">
            <h1>Question: 1</h1>
            <h2>{this.state.question}</h2>
            <div className="answer-content">
              <div className="answer">
                <input type="radio" className="radio" name="answers"/>
                <p>{this.state.answer}</p>
              </div>
              <div className="answer">
                <input type="radio" className="radio" name="answers"/>
                <p>{this.state.false1}</p>
              </div>
              <div className="answer">
                <input type="radio" className="radio" name="answers"/>
                <p>{this.state.false3}</p>
              </div>
              <div className="answer">
                <input type="radio" className="radio" name="answers"/>
                <p>{this.state.false2}</p>
              </div>
            </div>
          </div>
    )
  }

}

export default QuestionWidget;