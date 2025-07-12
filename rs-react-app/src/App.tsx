import { Component } from 'react';
import type { SpotifyTrack } from './services/spotifyApi';
import { spotifyApi } from './services/spotifyApi';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import ResultsSection from './components/ResultsSection';
import './App.css';

interface AppState {
  isLoading: boolean;
  tracks: SpotifyTrack[];
  error: string | null;
  searchTerm: string;
}

class App extends Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      isLoading: false,
      tracks: [],
      error: null,
      searchTerm: '',
    };
  }

  handleSearch = async (searchTerm: string): Promise<void> => {
    this.setState({
      isLoading: true,
      error: null,
      searchTerm,
      tracks: [], // Clear previous results
    });

    try {
      const tracks = await spotifyApi.searchTracks(searchTerm, 20);
      this.setState({
        tracks,
        isLoading: false,
      });
    } catch (error) {
      console.error('Search failed:', error);
      this.setState({
        error:
          error instanceof Error ? error.message : 'An unknown error occurred',
        isLoading: false,
        tracks: [],
      });
    }
  };

  render() {
    const { isLoading, tracks, error, searchTerm } = this.state;

    return (
      <ErrorBoundary>
        <div className="app">
          <Header />
          <main className="main-content">
            <div className="main-card">
              <SearchSection
                onSearch={this.handleSearch}
                isLoading={isLoading}
              />
              <ResultsSection
                isLoading={isLoading}
                tracks={tracks}
                error={error}
                searchTerm={searchTerm}
              />
            </div>
          </main>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
