import React, { useState } from "react";
import logo from "../assets/lemon.jpg";
import classes from "./Header.module.css";

export default function Header({ onOpenLayout }) {
  const [drawerOpen, setDawerOpen] = useState(false);

  function drawerToggleHandler() {
    setDawerOpen(!drawerOpen);
  }

  return (
    <header className={classes.mainHeader}>
      <nav className={classes.nav}>
        <div className={classes.logoDrawerContainer}>
          <img src={logo} alt="logo" className={classes.logo} />
          <div className={classes.drawerButton} onClick={drawerToggleHandler}>
            <span></span>
            {/**/}
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={`${classes.navUl} ${drawerOpen && classes.drawerOpen}`}>
          <li>
            <a href="/">Home</a>
          </li>

          <li>About</li>
          {/*To prevent redirect, 
          remove the link for now,
          
          */}

          <li>Menu</li>
          {/*To prevent redirect, 
          remove the link for now,
          
          */}

          <li
            onClick={() => {
              onOpenLayout();
            }}
          >
            Reservation
          </li>
          {/*To prevent redirect, 
          remove the link for now,
          
          */}

          <li>Order Online</li>
          {/*To prevent redirect, 
          remove the link for now,
          
          */}

          <li>Login</li>
          {/*To prevent redirect, 
          remove the link for now,
          
          */}
        </ul>
      </nav>
    </header>
  );
}
