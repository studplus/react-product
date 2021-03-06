import React from 'react';
import classes from './App.module.css';
import ProductData from "./ProductData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
            <img src="amzn_logo.png" alt="Amazon Logo" />
        </nav>
      </header>
        <div className={classes.MainContainer}>
            <div className={classes.ProductPreview}>
                <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview"/>
            </div>
            <div className={classes.ProductData}>
                <h1>{ProductData.title}</h1>
            </div>
        </div>
    </div>
  );
}

export default App;
