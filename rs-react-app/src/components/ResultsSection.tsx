import { Component } from 'react';
import './ResultsSection.css';

interface ResultsSectionState {
  isLoading: boolean;
  hasResults: boolean;
}

class ResultsSection extends Component<
  Record<string, never>,
  ResultsSectionState
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      isLoading: false,
      hasResults: false,
    };
  }

  render() {
    const { isLoading, hasResults } = this.state;

    return (
      <section className="results-section">
        <div className="spotify-header">
          <img
            src="/src/assets/images/full-logo-framed.svg"
            alt="Spotify Logo"
            className="spotify-logo"
          />
        </div>
        <div className="results-container">
          {isLoading ? (
            <div className="loading-state">
              <div className="vinyl-loader">
                <img
                  src="/src/assets/images/disk1.png"
                  alt="Loading..."
                  className="spinning-vinyl"
                />
              </div>
              <p className="loading-text">Searching for music...</p>
            </div>
          ) : hasResults ? (
            <div className="results-list">
              {/* TODO: Implement results display */}
              <p>Results will appear here...</p>
            </div>
          ) : (
            <div className="welcome-state">
              <img
                src="/src/assets/images/cat-big.png"
                alt="Cat mascot listening to music"
                className="cat-mascot"
              />
              <h3 className="welcome-title">Ready to explore music?</h3>
              <p className="welcome-text">
                Use the search form to find your favorite artists, songs, and
                albums!
              </p>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default ResultsSection;
