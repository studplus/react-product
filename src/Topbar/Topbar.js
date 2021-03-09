import React from 'react';
import classes from "./Topbar.module.css";

const Topbar = () => {
    return(
        <header>
            <nav className={classes.Topbar}>
                <img src="amzn_logo.png" alt="Amazon Logo" />
            </nav>
        </header>
    );
}

export default Topbar;