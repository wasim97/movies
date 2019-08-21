import React from 'react'

class Filter extends React.Component {
    constructor(props) {
        super(props)
        this.updateSearch = this.updateSearch.bind(this)
    }

    updateSearch(newFilter) {
        this.props.updateSearch(newFilter)
    }

    render() {
        return(
            <div className="btn-group">
                <select 
                    value={this.props.filter}
                    onChange={this.updateSearch}
                    name="filter"
                    className="btn btn-secondary btn-lg dropdown-toggle drop-down"
                >
                    <option value="All Movies">All Movies</option>
                    <option value="Low to High">Low to High Ratings</option>
                    <option value="High to Low">High to Low Ratings</option>
                </select>
            </div>
        )
    }
}

export default Filter