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
          <button className="question-list-btn btn btn-warning" id={problem.id} onClick={this.handleEdit}><i class="fas fa-edit"></i></button>
          <button className="question-list-btn btn btn-danger" id={problem.id} onClick={this.handleDelete}><i class="fas fa-trash"></i></button>
        </div>
      )
    });
    return result;  
  }


  render(){
    return (
      <Layout>
        <div className="container question-list-main-container">
          <div className="spacer">
          </div>
          <div className="question-list-main-content">
              {this.renderQuestions()} 
          </div>
          <div className="spacer">
          </div>
          <div className="question-list-accent-circle-1"></div>
          <div className="question-list-accent-circle-2"></div>
          <div className="question-list-accent-circle-3"></div>
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

