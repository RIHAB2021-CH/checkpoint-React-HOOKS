import React,{useState} from 'react';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Movies} from "./data";
function App() {
    const[MovieData,SetMovieData]=useState(Movies)
    const[textFilter,SetTextFilter]=useState('')
    const[ratingFilter,SetRatingFilter]=useState(0)
    return (
        <div>
            <Filter SetTextFilter={SetTextFilter} SetRatingFilter={SetRatingFilter}/>
            <MovieList SetMovieData={SetMovieData} MovieData={MovieData} textFilter={textFilter} ratingFilter={ratingFilter}/>
        </div>
    )
}

export default App
