// allTopics.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import QuestionLayout from './questionLayout';
import { safeCredentials } from '@utils/fetchHelper';
import './allTopics.scss';

class AllTopics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problems: [],
      shuffled: [],
      loading: true
    }  
    this.handleReset = this.handleReset.bind(this);
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
    this.setState({
      shuffled: shuffled,
      loading: false
    })
  }

  handleReset(){
    window.location = '../quizType';
  }

  render(){
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
          />
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