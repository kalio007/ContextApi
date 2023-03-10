import React, { useState, useContext }from 'react';
import Movie from './Movie';
import { MovieContext } from '../MovieContext';
import './Movielist.css';

function Movielist() {
    const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className='movielist'>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
}

export default Movielist