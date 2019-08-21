import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.updateSearch = this.updateSearch.bind(this)
  }

  updateSearch(newSearch) {
    this.props.updateSearch(newSearch)
  }

  render() {
    return(
      <div id="search-input">
        <input type="search" 
          placeholder="Find Movies..."
          onChange={this.updateSearch}
        />
        <i className="fa fa-search"></i>
      </div>
    )
  }
}


export default Search