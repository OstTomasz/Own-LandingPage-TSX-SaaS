import { CLIENT_ICONS } from "@/data/config";

import styles from "./HomeClients.module.scss";
import { ClientCard } from "@/components/ui/ClientCard/ClientCard";

export const HomeClients = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Nasi klienci</h2>
      <ul className={styles.list}>
        {CLIENT_ICONS.map((iconName) => (
          <ClientCard key={iconName} iconName={iconName} />
        ))}
      </ul>
    </section>
  );
};
