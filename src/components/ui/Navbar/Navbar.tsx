import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Navbar.module.scss";
import { Icon } from "../Icon/Icon";

import { useState, Activity, useEffect } from "react";
import { NAV_LINKS } from "@/data/navlinks";
import { MobileMenu } from "../MobileMenu/MobileMenu";

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(styles.navlink, isActive && styles.activeLink);

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleTabletChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleTabletChange);

    return () => mediaQuery.removeEventListener("change", handleTabletChange);
  }, []);

  return (
    <div>
      <nav aria-label="Main navigation">
        <ul className={styles.navigation}>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={getNavLinkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={styles["burger-btn"]}
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
        type="button"
      >
        <Icon name="menu" />
      </button>

      <Activity mode={isMenuOpen ? "visible" : "hidden"}>
        <MobileMenu
          key={isMenuOpen ? "open" : "closed"}
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </Activity>
    </div>
  );
};
