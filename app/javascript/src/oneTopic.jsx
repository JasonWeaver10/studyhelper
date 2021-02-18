// oneTopic.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import QuestionLayout from './questionLayout';
import { safeCredentials } from '@utils/fetchHelper';
import './oneTopic.scss';

class OneTopic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shuffled: [],
      loading: true,
      quizable: true,
      high_score: 0,
      topic: 0
    }
    this.handleReset = this.handleReset.bind(this);
  } 

    async componentDidMount(){
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const topic = urlParams.get('t')
        await fetch('../api/topicProblems/' + topic, safeCredentials({
        }))
        .then((response) => response.json())
        .then((data) => {
          this.setState({problems: data.problems})
        })
        await fetch('../api/topics/' + topic, safeCredentials({
        }))
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            high_score: data.topic.high_score,
            topic: topic
          })
        })
        if (this.state.problems.length > 1) {
          let unshuffled = this.state.problems
          let shuffled = unshuffled
          .map((a) => ({sort: Math.random(), value: a}))
          .sort((a, b) => a.sort - b.sort)
          .map((a) => a.value)
        this.setState({
          shuffled: shuffled,
          loading: false
        })  
        } else {
          this.setState({
            quizable: false
          })
        }
        
      }

      handleReset(){
        window.location = '../quizType';
      }
    
  render(){
    if (this.state.quizable == true) {

      if (this.state.loading == true) {
        return (
          <Layout>
            <div className="main-container">
              <div className="main-content">
                <div className="finished">
                  <h3>Loading...</h3>
                </div>
              </div>
            </div>
          </Layout>
        )
      } else {
        return (
          <Layout>
            <QuestionLayout
              problems={this.state.shuffled}
              handleReset = {this.handleReset}
              high_score={this.state.high_score}
              topic={this.state.topic}
            />
          </Layout> 
      ) 
      }
    } else {
      return (
        <Layout>
        <div className="main-container">
          <h3>"This Topic does not have enough questions to test yet!"</h3>
          <button className="btn btn-warning" onClick={this.handleReset}>Back to Quiz Selection</button>
        </div>
      </Layout>
      )
    }
  }       
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <OneTopic />,
    document.body.appendChild(document.createElement('div')),
  )
})