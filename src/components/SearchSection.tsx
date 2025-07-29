import { Component } from 'react';
import './SearchSection.css';

interface SearchSectionProps {
  onSearch: (searchTerm: string) => void;
  isLoading?: boolean;
}

interface SearchSectionState {
  searchTerm: string;
}

class SearchSection extends Component<SearchSectionProps, SearchSectionState> {
  constructor(props: SearchSectionProps) {
    super(props);

    // Load last search term from localStorage
    const savedSearchTerm = localStorage.getItem('spotify-search-term') || '';

    this.state = {
      searchTerm: savedSearchTerm,
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });

    // Save to localStorage as user types
    localStorage.setItem('spotify-search-term', searchTerm);
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const trimmedTerm = this.state.searchTerm.trim();

    if (trimmedTerm) {
      this.props.onSearch(trimmedTerm);
    }
  };

  render() {
    return (
      <section className="search-section">
        <div className="search-container">
          <form onSubmit={this.handleSubmit} className="search-form">
            <div className="input-group">
              <input
                type="text"
                value={this.state.searchTerm}
                onChange={this.handleInputChange}
                placeholder="Enter artist, song, or album..."
                className="search-input"
                required
              />
              <button
                type="submit"
                className="search-button"
                disabled={this.props.isLoading || !this.state.searchTerm.trim()}
              >
                {this.props.isLoading ? '🔄 Searching...' : '🔍 Search'}
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default SearchSection;
