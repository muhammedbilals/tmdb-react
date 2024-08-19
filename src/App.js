import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import MovieList from './components/MovieList';
import {css} from './index.css'


import MovieHomePage from './pages/moviehome';
import TvHomePage from './pages/tvhome';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<MovieHomePage />} />
        <Route path="/movies" element={ <MovieHomePage/>}/>
        <Route path="/tv-series" element={<TvHomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
