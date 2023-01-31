import React from 'react';
import './App.css';
import Movielist from './Components/Movielist';
import Nav from './Components/Nav/Nav';
import { MovieProvider } from './MovieContext';
import AddMovie from './Components/AddMovie';

function App() {
  return (
    <MovieProvider >
      <div>
        <Nav />
        <AddMovie />
        <Movielist />
      </div>
    </MovieProvider>
  )
}

export default App;
