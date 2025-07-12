import { Component } from 'react';
import './SearchSection.css';

interface SearchSectionState {
  searchTerm: string;
}

class SearchSection extends Component<
  Record<string, never>,
  SearchSectionState
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', this.state.searchTerm);
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
              <button type="submit" className="search-button">
                🔍 Search
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default SearchSection;
