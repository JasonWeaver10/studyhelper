// highScore.jsx
import React from 'react';
import './highScore.scss';


class HighScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
    }
    this.renderHighScores = this.renderHighScores.bind(this);
  } 

  componentDidMount() {
    fetch('http://localhost:3000/api/topics')
      .then(response => response.json())
      .then(data => {
        this.setState({ topics: data.topics })
       })
  }

  renderHighScores() {
      const { topics } = this.state
      if (!topics) return null
      const result = []
      topics.forEach(topic => {
        result.push(
          <li key={topic.id}>{topic.name}: {topic.high_score}</li>
        )
      });
      return result;  
  }

  render(){
    return (

      <div className="high-score-div">
        <h3 className="title">High Scores:</h3>
        <ul>
          {this.renderHighScores()}
        </ul>
      </div>
    )
  }
}



export default HighScore