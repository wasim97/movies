import React from 'react'
import Search from './Search';
import Movie from './Movie'
import Filter from './Filter';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.updateSearch = this.updateSearch.bind(this)
        this.state = {
            search : '',
            filter : '',
            movieList : this.props.movies,
            ratingsList : [
                "Low to High",
                "High to Low",
                "All Movies"
            ]
        }
    }

    updateSearch(event) {
        if(this.state.ratingsList.includes(event.target.value)) {
            this.setState({ filter: event.target.value })
        }
        else {
            this.setState({ search: event.target.value })
        }
        
    }

    filterArray(value) {
        if(value === "Low to High") {
            this.state.movieList.sort((a, b) => parseFloat(a.ratings) - parseFloat(b.ratings))
        }
        else if(value === "High to Low") {
            this.state.movieList.sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
        }
    }

    render() {
        const {search,filter} = this.state
        this.filterArray(filter)
        return(
            <div>
                <h1>Movies</h1>
                <label className="searchLabel">Search: </label> 
                <Search search={this.state.search} updateSearch={this.updateSearch} />
                <label className="dropDownLabel">Sort by Ratings: </label>
                <Filter filter={this.state.filter} updateSearch={this.updateSearch} />

                <br />
                <hr></hr>
                <br />
                
                <section id="movies">
                {
                    this.state.movieList
                    .filter(movie => movie.title.toLowerCase()
                    .includes(search.toLowerCase()))
                    .map(movie => <Movie key={movie.rank} movie={movie}/>)
                    
                }
                </section>
            </div>
        ) 
    }
}

export default Main