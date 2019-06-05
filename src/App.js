import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Connectinator from './components/Connectinator';
import Ajaxify from './components/Ajaxify';
import Failinator from './components/Failinator';

function App() {
  const [tab, setTab] = useState(0);

  function getTab() {
    switch (tab) {
      default:
      case 'helloWorld':
        return (<HelloWorld />);
      case 'connect':
        return (<Connectinator />);
      case 'ajax':
        return (<Ajaxify />);
      case 'fails':
        return (<Failinator />);
    }
  }

  function handleTab(e, tabToSet) {
    e.preventDefault();
    setTab(tabToSet);
  }

  return (
    <div className="App">
      <div className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Redux Playground</h1>
        <div>
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <a href="#" className="nav" onClick={(e) => handleTab(e, 'helloWorld')}>Hello World</a> |&nbsp;
          <a href="#" className="nav" onClick={(e) => handleTab(e, 'connect')}>Connect</a> |&nbsp;
          <a href="#" className="nav" onClick={(e) => handleTab(e, 'ajax')}>Ajax</a> |&nbsp;
          <a href="#" className="nav" onClick={(e) => handleTab(e, 'fails')}>Failinator</a>
        </div>
        <hr style={{width: '80%'}} />
        {getTab()}
      </div>
    </div>
  );
}

export default App;
