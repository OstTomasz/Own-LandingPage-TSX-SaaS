import { PORTFOLIO_FILTERS, type PortfolioCategory } from "@/data/config";
import styles from "./PortfolioFilters.module.scss";

interface PortfolioFiltersProps {
  activeFilter: PortfolioCategory;
  onFilterChange: (filter: PortfolioCategory) => void;
}

export const PortfolioFilters = ({
  activeFilter,
  onFilterChange,
}: PortfolioFiltersProps) => {
  return (
    <ul className={styles.list}>
      {PORTFOLIO_FILTERS.map((filter) => (
        <li key={filter} className={styles.element}>
          <button
            type="button"
            className={`${styles.button} ${
              activeFilter === filter ? styles.isActive : ""
            }`}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        </li>
      ))}
    </ul>
  );
};
