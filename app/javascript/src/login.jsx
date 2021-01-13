// login.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

const Login = () => (
  <Layout>
    <h1>Log in </h1>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Login />,
    document.body.appendChild(document.createElement('div')),
  )
})