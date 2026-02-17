import clsx from "clsx";
import styles from "./Header.module.scss";

import { Logo } from "@/components/ui/Logo/Logo";
import { Contacts } from "@/components/sections/Contacts/Contacts";
import { Navbar } from "@/components/common/Navbar/Navbar";
import { useScrolled } from "@/hooks/useScrolled";

export const Header = () => {
  const isScrolled = useScrolled();

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
