import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: 'mary selestor',
            price: '$200',
            id: 248,
        },
        {
            name: 'chimaobi Emod chantler',
            price: '$150',
            id: 578, 
        },
        {
            name: 'mary selestor',
            price: '$570',
            id: 567,
        }
    ]);
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}


