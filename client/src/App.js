import React, { useState } from 'react';
import logo from './logo.svg';
import Routes from './Routes/Routes';
import NavigationTop from './Dashboard/NavigationTop';
// import './App.css';
const App = () => {


  return (
    <>
      <div className="App">
        <NavigationTop />
        <Routes />
      </div>
    </>
  );
}

export default App;

