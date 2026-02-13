import { NavLink } from "react-router-dom";
import styles from "./Logo.module.scss";

export const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.logo}>
      <NavLink to="/" onClick={scrollToTop}>
        <span className={styles.web}>WEB</span>
        <span>STUDIO</span>
      </NavLink>
    </div>
  );
};
