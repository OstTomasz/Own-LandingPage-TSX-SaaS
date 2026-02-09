import { NavLink } from "react-router-dom";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <nav className={styles.logo}>
      <NavLink to="/">
        <span className={styles.web}>WEB</span>
        <span>STUDIO</span>
      </NavLink>
    </nav>
  );
};
