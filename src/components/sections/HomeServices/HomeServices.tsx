import { FEATURES, SERVICES } from "@/data/config";

import styles from "./HomeServices.module.scss";
import { ServiceFeature } from "@/components/ui/ServiceFeature/ServiceFeature";

export const HomeServices = () => {
  return (
    <section className={styles.section} aria-labelledby="services-title">
      <h2 id="features-title" className={styles.hidden}>
        Our Features
      </h2>
      <ul className={styles.featureList} aria-labelledby="features-title">
        {FEATURES.map((feat) => (
          <li key={feat.id}>
            <ServiceFeature
              iconName={feat.icon}
              title={feat.title}
              description={feat.description}
            />
          </li>
        ))}
      </ul>

      <div className={styles.desktop}>
        <h2 id="services-title" className={styles.title}>
          Our Services
        </h2>
        <ul className={styles.serviceList} aria-labelledby="services-title">
          {SERVICES.map((service) => (
            <li key={service.id} className={styles.serviceItem}>
              {/* tabIndex pozwala na focus klawiaturą, co wywoła hover w CSS (:focus-within) */}
              <div className={styles.imageWrapper} tabIndex={0}>
                <img
                  src={service.img} // Fallback
                  srcSet={`${service.img} 1x, ${service.img2x} 2x`} // Prawidłowe ładowanie x2 na Retinę
                  alt={service.title}
                  loading="lazy"
                  width="360"
                  height="300"
                  className={styles.serviceImage} // Dodaj klasę dla pewności
                />
                <div className={styles.overlay}>
                  <p className={styles.overlayText}>{service.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
