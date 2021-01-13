// editQuestion.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

const EditQuestion = () => (
  <Layout>
    <h1>Edit Question </h1>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <EditQuestion />,
    document.body.appendChild(document.createElement('div')),
  )
})