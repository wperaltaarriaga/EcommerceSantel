import React from "react";
import styles from "./NavBar.module.css";


const NavBar = ({
  title = "Title por defecto",
  subtitle = "Soy un sub con una prop por defecto",
}) => {
  return (
    <nav className={styles.nav}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </nav>
  );
};

export default NavBar;