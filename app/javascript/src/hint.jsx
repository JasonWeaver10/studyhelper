// hint.jsx
import React from 'react';
import './hint.scss';


class Hint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHint: false,
      hint: ''
    }
    this.handleHint = this.handleHint.bind(this);
  } 

  componentDidMount(){
    this.setState({
      hint: this.props.hint
    })
  }

  handleHint() {
    this.setState({
      showHint: true
    })

  }

  render(){
    if (this.state.showHint == false) {
      return (
        <div className="hint-div"> 
          <button className="btn btn-warning" onClick={this.handleHint}>I need a Hint</button>
        </div>
      )
    } else {
      return (
        <div className="hint-div answer"> 
          <p>{ this.props.hint }</p>
        </div>
      )
    }
    
  }
}

export default Hint