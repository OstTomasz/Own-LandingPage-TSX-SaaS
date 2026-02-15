import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_PROJECTS, PortfolioCategory } from "@/data/config";
import { PortfolioCard } from "../PortfolioCard/PortfolioCard";

import styles from "./PortfolioList.module.scss";
import { PortfolioFilters } from "../PortfolioFilters/PortFolioFilters";

export const PortfolioList = () => {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("All");

  const filteredProjects =
    activeFilter === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter(
          (project) => project.category === activeFilter,
        );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <PortfolioFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Owinięcie AnimatePresence w motion.div z layout 
           wymusi płynną zmianę wysokości całej sekcji.
        */}
        <motion.div
          layout
          transition={{
            layout: { duration: 0.4, ease: "easeInOut" },
          }}
          style={{ width: "100%" }}
        >
          <ul className={styles.list}>
            <div className={styles.listWrapper}>
              {" "}
              {/* Dodaj wrapper ze stałym min-height w CSS */}
              <AnimatePresence mode="wait">
                <motion.ul
                  key={activeFilter} // Klucz na liście wymusi animację całej grupy przy zmianie filtra
                  className={styles.list}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {filteredProjects.map((project) => (
                    <li key={project.id} className={styles.listItem}>
                      <PortfolioCard {...project} />
                    </li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
