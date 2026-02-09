import clsx from "clsx";
import { useState, useEffect } from "react";
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
        if (prev && offset < 10) return false;
        if (!prev && offset > 30) return true;
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div
        className={clsx(styles.headerInner, isScrolled && styles.isScrolled)}
      >
        <Logo />
        <Navbar />
        <Contacts />
      </div>
    </header>
  );
};
