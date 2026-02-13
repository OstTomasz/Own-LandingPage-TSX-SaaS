import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./MobileMenu.module.scss";

import { Icon } from "../Icon/Icon";
import { NAV_LINKS } from "@/data/navlinks";
import { Contacts } from "../Contacts/Contacts";
import { SocialList } from "../SocialList/SocialList";

interface MobileMenuProps {
  onClose: () => void;
  isOpen: boolean;
}

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(styles.navlink, isActive && styles.activeLink);

export const MobileMenu = ({ onClose, isOpen }: MobileMenuProps) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setAnimate(true), 10);
      document.body.style.overflow = "hidden";
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      onClose();
    }, 350);
  };

  return (
    <div className={clsx(styles.overlay, animate && styles.isOpen)}>
      <button className={styles.closeBtn} onClick={handleClose} type="button">
        <Icon name="close-btn" size={15} />
      </button>
      <div className={styles.overlayContent}>
        <nav className={styles.mobileNav}>
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={getNavLinkClass}
              onClick={handleClose}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <Contacts className={styles.mobileContacts} />
        <SocialList />
      </div>
    </div>
  );
};
