import React, { useState, useContext} from 'react';
import { MovieContext } from '../../MovieContext';
import './Nav.css';

function Nav() {
    const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className='navbar'>
        <h3 className='navbar_name'> Dev Kalio</h3>
        <p className='navbar_movies'>List of Movies:{movies.length} </p>
    </div>
  )
}

export default Nav