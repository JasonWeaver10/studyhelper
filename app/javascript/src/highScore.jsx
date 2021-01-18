// highScore.jsx
import React from 'react';
import './highScore.scss';


class HighScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: {},
      topic: ""
    }
  } 

  componentDidMount() {
    fetch('./api/topics')
      .then(response => response.json())
      .then(data => {
        this.setState({topics: data.topics, hello: data.topics[0].name})
       })
  }

  render(){
    return (

      <div className="high-score-div">
        <h3 className="title">High Scores:</h3>
        <ul>
          <li>
            <p>{this.state.topic}</p>
          </li>
          <li>
            <p>Topic 2</p>
          </li>
          <li>
            <p>hello</p>
          </li>
        </ul>
      </div>
    )
  }
}



export default HighScore