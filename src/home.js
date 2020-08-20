import React from 'react';
import './App.css';
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Front-end Basic Knowledge Mind Map</h1>
      </header>
      <div className="App-container">
        <NavLink to="/js" className="App-container-item">Javascript</NavLink>
        <NavLink to="/js" className="App-container-item">Javascript</NavLink>
        <NavLink to="/js" className="App-container-item">Javascript</NavLink>
        <NavLink to="/js" className="App-container-item">Javascript</NavLink>
        <NavLink to="/js" className="App-container-item">Javascript</NavLink>
        <NavLink to="/js" className="App-container-item">Javascript</NavLink>
      </div>
    </div>
  );
}

export default Home;