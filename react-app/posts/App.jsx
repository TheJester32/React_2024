import React from 'react';
import Posts from './components/Posts';

class App extends React.Component {
  state = {
    posts: [
      {id: 'abc1', name:'JS Basics'},
      {id: 'abc2', name:'JS Advanced'},
      {id: 'abc3', name:'React JS'},
    ]
  };

  handler = () => {
    console.log('App.jsx setState updated');
  }

  deletePost = (postId) => {
    const updatedPosts = this.state.posts.filter(post => post.id !== postId);
    this.setState({ posts: updatedPosts });
  }

  render() {
    return (
      <div className="App">
        <Posts posts={this.state.posts} cb={this.handler} deletePost={this.deletePost}/>
      </div>
    );
  }
}

export default App;