import React, { Component } from 'react';

import SearchPage from '../containers/SearchPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchPage />
        <Footer />
      </div>
    );
  }
}

export default App;
