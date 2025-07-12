import { Component } from 'react';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import ResultsSection from './components/ResultsSection';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main className="main-content">
          <div className="main-card">
            <SearchSection />
            <ResultsSection />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
