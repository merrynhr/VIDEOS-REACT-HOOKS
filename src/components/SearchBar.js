import React from 'react';

class SearchBar extends React.Component {
  state = { term: 'Search here!' };

  onInputChange = (event) => {
    this.setState({term: event.target.value})
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Search youtube</label>
            <input 
              type="text" 
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar
