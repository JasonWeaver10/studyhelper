// addQuestion.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

const AddQuestion = () => (
  <Layout>
    <h1>Add Question </h1>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AddQuestion />,
    document.body.appendChild(document.createElement('div')),
  )
})