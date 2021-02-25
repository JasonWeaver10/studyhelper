// questions.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import { safeCredentials } from '@utils/fetchHelper'
import './questions.scss';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problems: [],
      user_id: 0
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.renderQuestions = this.renderQuestions.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  } 

  async componentDidMount(){
    await fetch('/api/authenticated', safeCredentials({
    }))
    .then((response) => response.json())
    .then((data) => {
      if (data.authenticated == false) {
        window.location = "/"
      } else {
        this.setState({
          user_id: data.session.id
        })
        const user_id = this.state.user_id
        fetch('./api/userQuestions/' + user_id, safeCredentials({
        }))
        .then((response) => response.json())
        .then((data) => {
          this.setState({ problems: data.problems})
        })
      } 
    })  
  }

  handleEdit(e) {
    const editId = e.target.id
    window.location = './editQuestion/' + `${editId}`
  }

  async handleDelete(e) {
    const deleteId = e.target.id
    await fetch('/api/problems/' + `${deleteId}`, safeCredentials({
      method: 'DELETE'
    }))
    window.location = '/questions'
  }

  renderQuestions() {
    const { problems } = this.state
    if (!problems) return null
    const result = []
    problems.forEach(problem => {
      result.push(
        <div className="question-div" key={problem.id}>
          <h4 >{problem.question}</h4>
          <button className="btn btn-warning" id={problem.id} onClick={this.handleEdit}>Edit Question</button>
          <button className="btn btn-danger" id={problem.id} onClick={this.handleDelete}>Delete Question</button>
        </div>
      )
    });
    return result;  
  }


  render(){
    return (
      <Layout>
        <div className="container main-container">
          <div className="spacer">
          </div>
          <div className="main-content">
              {this.renderQuestions()} 
          </div>
          <div className="spacer">
          </div>
        </div>
      </Layout>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Questions />,
    document.body.appendChild(document.createElement('div')),
  )
})

