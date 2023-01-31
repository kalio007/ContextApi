import React from 'react';
import './Movie.css';

function Movie(props) {
  return (
    <div className='movie'>
        <h3 className='movie_name'>{props.name}</h3>
        <p className='movie_price'>{props.price}</p>
    </div>
  )
}

export default Movie