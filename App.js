import React from 'react';
import './App.css';
import movies from './movies';
import Main from './Main';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      moviesList : movies
    }
  }

  render() {
    return (
      <Main movies={this.state.moviesList} />
    );
  }
  
}

export default App;
