import { Component } from 'react';
import type { SpotifyTrack } from './services/spotifyApi';
import { spotifyApi } from './services/spotifyApi';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import ResultsSection from './components/ResultsSection';
import './App.css';

interface AppState {
  isLoading: boolean;
  tracks: SpotifyTrack[];
  error: string | null;
  searchTerm: string;
  shouldThrowError: boolean;
}

class App extends Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      isLoading: false,
      tracks: [],
      error: null,
      searchTerm: '',
      shouldThrowError: false,
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
    const { isLoading, tracks, error, searchTerm, shouldThrowError } =
      this.state;

    // Throw error during render cycle so ErrorBoundary can catch it
    if (shouldThrowError) {
      throw new Error(
        'Test ErrorBoundary - This is a deliberate error for testing purposes'
      );
    }

    return (
      <div className="app">
        <Header />
        <main className="main-content">
          <div className="main-card">
            <SearchSection onSearch={this.handleSearch} isLoading={isLoading} />
            <ResultsSection
              isLoading={isLoading}
              tracks={tracks}
              error={error}
              searchTerm={searchTerm}
            />
          </div>
        </main>
        <button
          className="error-test-button"
          onClick={() => {
            this.setState({ shouldThrowError: true });
          }}
          title="Click to test ErrorBoundary functionality"
        >
          🚨 Test Error Boundary
        </button>
      </div>
    );
  }
}

export default App;
