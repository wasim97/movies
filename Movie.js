import React from 'react'

function Movie(props) {
    return (
        <div>
           <figure>
                <img src={props.movie.poster} alt="movie poster"/>
                <figcaption>
                {/* <p>{props.movie.title}</p> */}
                    <p className="genre">{props.movie.genre.join(', ')}</p>
                    <div className="rating">
                        <i className="fa fa-heart"></i>
                        <p className="rate">{props.movie.ratings}</p>
                    </div>
                </figcaption>
            </figure>
        </div>
    )
}

export default Movie