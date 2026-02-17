import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Logo.module.scss";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export const Logo = ({ variant = "dark", className }: LogoProps) => {
  return (
    <div className={clsx(styles.logo, styles[variant], className)}>
      <NavLink
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className={styles.web}>WEB</span>
        <span>STUDIO</span>
      </NavLink>
    </div>
  );
};
