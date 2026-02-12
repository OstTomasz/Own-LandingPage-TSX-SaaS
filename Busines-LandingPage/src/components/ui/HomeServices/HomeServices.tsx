import trump1 from "../../../assets/images/trump1.jpg";
import trump1_2x from "../../../assets/images/trump1@2x.jpg";
import trump2 from "../../../assets/images/trump2.jpg";
import trump2_2x from "../../../assets/images/trump2@2x.jpg";
import trump3 from "../../../assets/images/trump3.jpg";
import trump3_2x from "../../../assets/images/trump3@2x.jpg";

import { ServiceFeature } from "../ServiceFeature/ServiceFeature";

import styles from "./HomeServices.module.scss";

const FEATURES = [
  {
    id: 1,
    icon: "antenna-1",
    title: "Global Reach",
    description:
      "Connecting your business to the world with advanced satellite technology.",
  },
  {
    id: 2,
    icon: "clock-1",
    title: "Swift Delivery",
    description:
      "Time is money. We ensure your projects are completed ahead of schedule.",
  },
  {
    id: 3,
    icon: "diagram-1",
    title: "Data Insights",
    description:
      "Smart analytics to help you visualize growth and optimize performance.",
  },
  {
    id: 4,
    icon: "astronaut-1",
    title: "Future Tech",
    description:
      "Bold solutions that push the boundaries of what's possible in IT.",
  },
];

const SERVICES = [
  { id: 1, title: "Desktop Apps", img: trump1, img2x: trump1_2x },
  { id: 2, title: "Mobile Apps", img: trump2, img2x: trump2_2x },
  { id: 3, title: "Design Solutions", img: trump3, img2x: trump3_2x },
];

export const HomeServices = () => {
  return (
    <section className={styles.section}>
      <ul className={styles.featureList}>
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
        <h2 className={styles.title}>Our Services</h2>
        <ul className={styles.serviceList}>
          {SERVICES.map((service) => (
            <li key={service.id} className={styles.serviceItem}>
              <div className={styles.imageWrapper}>
                <img
                  src={service.img}
                  srcSet={`${service.img} 1x, ${service.img2x} 2x`}
                  alt={service.title}
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
