// questionWidget.jsx
import React from 'react';
import './questionWidget.scss';
import Hint from './hint';


class QuestionWidget extends React.Component {
  constructor(props) {
    super(props);
  } 

  render(){
    return (
          <div className="inner-content">
            <div className="question-div">
              <h3>Question: {this.props.questionNum}</h3>
              <h3>Correct answers: {this.props.correct}</h3>
              <hr></hr>
              <h2>{this.props.question}</h2>
            </div>
            <div className="answer-content">
              <div className="answer">
                <input type="radio" className="radio" name="answers" id={this.props.answer} onClick={this.props.handleSelect}/>
                <p>{this.props.answer}</p>
              </div>
              <div className="answer">
                <input type="radio" className="radio" name="answers" id={this.props.false1} onClick={this.props.handleSelect}/>
                <p>{this.props.false1}</p>
              </div>
              <div className="answer">
                <input type="radio" className="radio" name="answers" id={this.props.false3} onClick={this.props.handleSelect}/>
                <p>{this.props.false3}</p>
              </div>
              <div className="answer">
                <input type="radio" className="radio" name="answers"  id={this.props.false2} onClick={this.props.handleSelect}/>
                <p>{this.props.false2}</p>
              </div>
              <Hint 
              hint={this.props.hint}
              key={this.props.hint}
              />
            </div>
          </div>
    )
  }

}

export default QuestionWidget;