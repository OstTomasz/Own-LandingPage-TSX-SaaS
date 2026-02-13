import { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./Header.module.scss";

import { Logo } from "@/components/ui/Logo/Logo";
import { Navbar } from "@/components/ui/Navbar/Navbar";
import { Contacts } from "@/components/ui/Contacts/Contacts";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      setIsScrolled((prev) => {
        // Histereza zapobiegająca pętli (flicker)
        if (!prev && offset > 50) return true; // Włączamy przy 50px
        if (prev && offset < 10) return false; // Wyłączamy dopiero przy 10px
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={clsx(styles.header, isScrolled && styles.isScrolled)}>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <Logo variant="light" />
          <Navbar />
          <Contacts direction="auto" />
        </div>
      </div>
    </header>
  );
};
