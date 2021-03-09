import React from 'react';
import classes from './App.module.css';
import ProductPreview from "./ProductPreview";
import ProductDetails from "./ProductDetails";

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
                <ProductPreview />
            </div>
            <div className={classes.ProductData}>
                <ProductDetails />
            </div>
        </div>
    </div>
  );
}

export default App;
