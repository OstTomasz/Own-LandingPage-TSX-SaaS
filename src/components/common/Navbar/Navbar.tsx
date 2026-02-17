import { useState } from "react";
import clsx from "clsx";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { QUERIES } from "@/styles/breakpoints";
import styles from "./Navbar.module.scss";

import { NAV_LINKS } from "@/data/navlinks";
import { NavLink } from "react-router-dom";

import { Icon } from "../../ui/Icon/Icon";
import { MobileMenu } from "@/components/common/MobileMenu/MobileMenu";

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(styles.navlink, isActive && styles.activeLink);

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useMediaQuery(QUERIES.tablet);

  // isMenuOpen ma sens tylko na mobile — na desktopie zawsze false
  const menuOpen = !isDesktop && isMenuOpen;

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={styles.nav}>
      <nav className={styles.navContainer} aria-label="Main navigation">
        <ul className={styles.navigation}>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={getNavLinkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        {!isDesktop && (
          <button
            className={styles["burger-btn"]}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            type="button"
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        )}
      </nav>
      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
    </div>
  );
};
