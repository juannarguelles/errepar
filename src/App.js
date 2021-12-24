import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages";
import Peliculas from "./Pages/peliculas";
import Series from "./Pages/series";

function App() {
  return (
  <Router>
    <Navbar/>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Peliculas' exact component={Peliculas} />
      <Route path='/Series' exact component={Series} />
    </Switch>
  </Router>
  );
}

export default App;