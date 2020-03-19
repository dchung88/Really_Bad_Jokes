import React from 'react';
import Joke from './components/Joke.js';
import Edit_Joke from './components/Edit_Joke.js';
import { Router, Link } from '@reach/router';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Jokes</h1>
      <nav>
        <Link to="/" >Home</Link>
        {" | "}
        <Link to="new">New</Link>
      </nav>
      <Router>
        <Joke path="/" />
        <Edit_Joke path="/edit/:_id" />
      </Router>
    </div>
  );
}

export default App;
