// questionWidget.jsx
import React from 'react';
import './questionWidget.scss';


class QuestionWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    }
    this.renderAnswers = this.renderAnswers.bind(this);
  } 

  componentDidMount(){
    const answers = []
    answers.push(this.props.answer)
    answers.push(this.props.false1)
    answers.push(this.props.false2)
    answers.push(this.props.false3)

    let shuffled = answers
    .map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)

    this.setState({answers: shuffled})
  }

  renderAnswers() {
    const answers = this.state.answers
    const result = []
    answers.forEach(answer => {
      result.push(
        <div className="answer" key={answer}>
          <input type="radio" className="radio" name="answers" id={answer} onClick={this.props.handleSelect}/>
          <p>{answer}</p>
        </div>
      )
    });
    return result;  
  }

  render(){
    return (
          <div className="inner-content">
            <div className="question-div">
              <h3 className="h3">Question: {this.props.questionNum}</h3>
              <h3 className="h3">Correct answers: {this.props.correct}</h3>
              <hr></hr>
              <h2 className="h2">{this.props.question}</h2>
            </div>
            <div className="answer-content">
              {this.renderAnswers()}
            </div>
          </div>
    )
  }
}

export default QuestionWidget;