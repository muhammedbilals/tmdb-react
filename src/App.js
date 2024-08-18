
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import MovieList from './components/MovieList';
import TVSeriesList from './components/TVSeriesList'
// Import your other components or pages for movies and TV series

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/movies" element={<MovieList />}/>
        {/* Add routes for other pages */}
        <Route path="/tv-series" element={<TVSeriesList />} />
      </Routes>
    </Router>
  );
};

export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import HomePage from "../src/views/homePage.js"
// import MovieList from "./components/MovieList.jsx";

// const App = ()=> {
    
//     return (
//         <Router>
//             <header/>
//             <Routes>
//                 <Route path= "/movies" element={<HomePage/>}/>
//                 <Route path= "/movies" element={<MovieList/>}/>

           
//             </Routes>

            
//         </Router>
//     )
// }

// export default App;