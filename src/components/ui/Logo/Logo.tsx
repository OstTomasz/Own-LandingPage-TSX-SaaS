import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Logo.module.scss";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export const Logo = ({ variant = "dark", className }: LogoProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={clsx(styles.logo, className)}
      data-variant={variant} // Renderuje się jako: data-variant="dark"
    >
      <NavLink to="/" onClick={scrollToTop}>
        <span className={styles.web}>WEB</span>
        <span>STUDIO</span>
      </NavLink>
    </div>
  );
};
