import { ClientCard } from "../ClientCard/ClientCard";
import styles from "./HomeClients.module.scss";

// Tablica z nazwami ikon - zgodnie z Twoim sprite'em
const CLIENT_ICONS = [
  "client1",
  "client2",
  "client3",
  "client4",
  "client5",
  "client6",
];

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
