import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Movies} from "./data";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import MovieDesc from "./Components/MovieDesc"

function App() {
   
    return (
        <Switch>
             <Route
          exact
          path="/"
          render={() => (
            <Home  Movies={Movies} />
          )}
        />
         <Route
          exact
          path="/movieDesc/:id"
          render={(defaultProps) => (
            <MovieDesc {...defaultProps} Movies={Movies} />
          )}
        />
       </Switch>
    )
}

export default App
