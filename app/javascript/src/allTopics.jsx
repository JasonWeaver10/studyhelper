// allTopics.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

const AllTopics = () => (
  <Layout>
    <h1>All Topics </h1>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AllTopics />,
    document.body.appendChild(document.createElement('div')),
  )
})