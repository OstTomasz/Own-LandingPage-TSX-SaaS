import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import styles from "./MobileMenu.module.scss";

import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

import { NAV_LINKS } from "@/data/navlinks";
import { CloseButton } from "@/components/ui/CloseBtn/CloseBtn";
import { Contacts } from "@/components/sections/Contacts/Contacts";
import { SocialList } from "@/components/ui/SocialList/SocialList";
import { TRANSITION_DURATION } from "@/styles/breakpoints";

interface MobileMenuProps {
  onClose: () => void;
  isOpen: boolean;
}

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(styles.navlink, isActive && styles.activeLink);

export const MobileMenu = ({ onClose, isOpen }: MobileMenuProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (isOpen) {
      const frame = requestAnimationFrame(() => setIsAnimating(true));
      return () => cancelAnimationFrame(frame);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(onClose, TRANSITION_DURATION);
  };

  // 2. Jeśli nie chcemy portalu, gdy menu jest całkiem zamknięte:
  if (!isOpen) return null;

  return createPortal(
    <div
      className={clsx(styles.overlay, isAnimating && styles.isVisible)}
      role="dialog"
      aria-modal="true"
    >
      {/* Kliknięcie w tło również zamyka z animacją */}
      <div className={styles.backdrop} onClick={handleClose} />

      <div className={styles.overlayContent}>
        <CloseButton onClick={handleClose} className={styles.closeBtn} />

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
        <div className={styles.menuFooter}>
          <Contacts className={styles.mobileContacts} direction="column" />

          <div className={styles.socialsWrapper}>
            <SocialList variant="dark" />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};
