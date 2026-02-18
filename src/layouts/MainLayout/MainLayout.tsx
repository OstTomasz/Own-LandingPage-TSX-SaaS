import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import styles from "./MainLayout.module.scss";
import { Header } from "@/components/common/Header/Header";
import { Footer } from "@/components/common/Footer/Footer";

const pageVariants: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.15,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

export const MainLayout = () => {
  const { pathname } = useLocation();
  const currentOutlet = useOutlet();

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainContainer}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            className={styles.pageAnimation}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {currentOutlet}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};
