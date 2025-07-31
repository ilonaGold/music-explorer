import { Component } from 'react';
import type { SpotifyTrack } from '../services/spotifyApi';
import TrackResult from './TrackResult';
import './ResultsSection.css';

// Import images
import spotifyLogo from '/images/full-logo-framed.svg';
import vinylLoader from '/images/disk1.png';
import catMascot from '/images/cat-mascot.png';

interface ResultsSectionProps {
  isLoading: boolean;
  tracks: SpotifyTrack[];
  error: string | null;
  searchTerm: string;
}

class ResultsSection extends Component<ResultsSectionProps> {
  render() {
    const { isLoading, tracks, error, searchTerm } = this.props;
    const hasResults = tracks.length > 0;

    return (
      <section className="results-section">
        <div className="spotify-header">
          <img src={spotifyLogo} alt="Spotify Logo" className="spotify-logo" />
        </div>
        <div className="results-container">
          {error ? (
            <div className="error-state">
              <p className="error-text">❌ {error}</p>
              <p className="error-subtext">
                Please try again with a different search term.
              </p>
            </div>
          ) : isLoading ? (
            <div className="loading-state">
              <div className="vinyl-loader">
                <img
                  src={vinylLoader}
                  alt="Loading..."
                  className="spinning-vinyl"
                />
              </div>
              <p className="loading-text">
                Searching for &quot;{searchTerm}&quot;...
              </p>
            </div>
          ) : hasResults ? (
            <div className="results-list">
              <div className="results-header">
                <h3 className="results-title">
                  Found {tracks.length} track{tracks.length !== 1 ? 's' : ''}{' '}
                  for &quot;{searchTerm}&quot;
                </h3>
              </div>
              <div className="tracks-container">
                {tracks.map((track) => (
                  <TrackResult key={track.id} track={track} />
                ))}
              </div>
            </div>
          ) : (
            <div className="welcome-state">
              <img
                src={catMascot}
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
