import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './Components/CommentBox'
import CommentList from './Components/CommentList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments:['第一条评论', '第二条评论']
    }
    this.addComment = this.addComment.bind(this)
  }
  
  addComment(comment) {
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <CommentList comments={this.state.comments} />
        <CommentBox addComment={this.addComment} comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
