// layout.jsx
import React from 'react';
import './layout.scss';

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a href="/"><span className="navbar-brand mb-0 h1 logoImage"></span></a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/addTopic">Add Topic</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/addQuestion">Add Question</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/quizType">Start Quiz</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/questions">All Questions</a>
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
      <footer className="footer">
          <ul className="footer-links">
            <h6>Links</h6>
            <a href="https://www.github.com/JasonWeaver10"><li>Github</li></a>
            <a href="https://www.linkedin.com/in/jason-weaver-348bb6180/"><li>LinkedIn</li></a>
            <a href="https://www.jweaver.dev"><li>Portfolio Site</li></a>
            <a href="https://www.unsplash.com"><li>Unsplash</li></a>
          </ul>
          <ul className="footer-links">             
            <h6>Image Attribution</h6>
            <li>Home Page Image: Windows</li>
            <li>Add Question Page Image: Siora Photography</li>
            <li>Add Topic Page Image: Chuttersnap</li>
          </ul>
          <ul className="footer-links">
            <h6>Image Attribution</h6>
            <li>Edit Question Page Image: David Pennington</li>
            <li>All Questions Page Image: Nick Fewings</li>
            <li>Log-out image: Muhammed Jiyadh</li>
          </ul>
      </footer>
    </React.Fragment>
  );
}

export default Layout;