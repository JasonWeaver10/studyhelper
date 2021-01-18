// layout.jsx
import React from 'react';
import './layout.scss';

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a href="/"><span className="navbar-brand mb-0 h1">Study Helper</span></a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/addQuestion">Add Question</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/addTopic">Add Topic</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/allTopics">All Topics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/editQuestion/1">Edit Question</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container py-2">
        {props.children}
      </div>
      <footer className="p-3 bg-light">
        <div>
          <p>footer</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;