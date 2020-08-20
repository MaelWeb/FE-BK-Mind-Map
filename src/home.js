import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Front-end Basic Knowledge Mind Map</h1>
      </header>
      <div className="App-container">
        <NavLink to="/js" className="App-container-item">
          <div className="box js">
            <h3>𝔍𝔞𝔳𝔞𝔖𝔠𝔯𝔦𝔭𝔱</h3>
          </div>
        </NavLink>
        <NavLink to="/js" className="App-container-item">
          <div className="box css">
            <h3>ℭ𝔖𝔖</h3>
          </div>
        </NavLink>
        <NavLink to="/js" className="App-container-item">
          <div className="box react">
            <h3>框架/类库</h3>
          </div>
        </NavLink>
        <NavLink to="/js" className="App-container-item">
          <div className="box browser">
            <h3>浏览器</h3>
          </div>
        </NavLink>
        <NavLink to="/js" className="App-container-item">
          <div className="box new">
            <h3>新技术/方向</h3>
          </div>
        </NavLink>
        <NavLink to="/js" className="App-container-item">
          <div className="box http">
            <h3>ℌ𝔱𝔱𝔭/ℌ𝔱𝔱𝔭𝔰</h3>
          </div>
        </NavLink>
        <NavLink to="/js" className="App-container-item">
          <div className="box webpack">
            <h3>工程化与工具</h3>
          </div>
        </NavLink>
        <NavLink to="/js" className="App-container-item">
          <div className="box agl">
            <h3>编程/算法</h3>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
