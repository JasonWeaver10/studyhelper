// logout.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

const Logout = () => (
  <Layout>
    <h1>Log out </h1>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Logout />,
    document.body.appendChild(document.createElement('div')),
  )
})