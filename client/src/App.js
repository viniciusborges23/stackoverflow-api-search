import React, { Component } from 'react';

import QuestionList from './components/QuestionList';

const Search = () => {
  return <div>search</div>;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <QuestionList />
      </div>
    );
  }
}

export default App;
