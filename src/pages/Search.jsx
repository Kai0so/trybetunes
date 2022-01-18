import React from 'react';
import Header from './Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      searchButtonDisabled: true,
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ searchInput: value }, this.enableSearchButton);
  }

  enableSearchButton = () => {
    const {
      searchInput,
    } = this.state;

    const MIN_INPUT_LENGTH = 2;

    if (searchInput.length < MIN_INPUT_LENGTH) {
      this.setState({ searchButtonDisabled: true });
    } else {
      this.setState({ searchButtonDisabled: false });
    }
  }

  render() {
    const {
      searchInput,
      searchButtonDisabled,
    } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        <input
          type="text"
          data-testid="search-artist-input"
          value={ searchInput }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ searchButtonDisabled }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default Search;
