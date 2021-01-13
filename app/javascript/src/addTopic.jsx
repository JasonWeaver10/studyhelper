// addTopic.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

const AddTopic = () => (
  <Layout>
    <h1>Add Topic </h1>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AddTopic />,
    document.body.appendChild(document.createElement('div')),
  )
})