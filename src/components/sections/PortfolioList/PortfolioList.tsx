import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_PROJECTS, type PortfolioCategory } from "@/data/config";

import styles from "./PortfolioList.module.scss";
import { PortfolioFilters } from "../PortfolioFilters/PortfolioFilters";
import { PortfolioCard } from "@/components/ui/PortfolioCard/PortfolioCard";

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

        {/* Ten div pilnuje wysokości podczas znikania/pojawiania się kart */}
        <div className={styles.listWrapper}>
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeFilter}
              className={styles.list}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {filteredProjects.map((project) => (
                <li key={project.id} className={styles.listItem}>
                  <PortfolioCard {...project} />
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
