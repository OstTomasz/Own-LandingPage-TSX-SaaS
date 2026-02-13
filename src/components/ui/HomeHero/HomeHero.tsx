import { useState } from "react";
import styles from "./HomeHero.module.scss";

import mobile1x from "@/assets/images/headline-background-mini.jpg";
import mobile2x from "@/assets/images/headline-background-mini@2x.jpg";
import tablet1x from "@/assets/images/headline-background-mid.jpg";
import tablet2x from "@/assets/images/headline-background-mid@2x.jpg";
import desktop1x from "@/assets/images/headline-background-max.jpg";
import desktop2x from "@/assets/images/headline-background-max@2x.jpg";

import { Button } from "../Button/Button";
import { FormModal } from "../FormModal/FormModal";

export const HomeHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className={styles.hero}>
      <div className={styles.innerWrapper}>
        <picture className={styles.picture}>
          <source
            media="(min-width: 1440px)"
            srcSet={`${desktop1x} 1x, ${desktop2x} 2x`}
          />

          <source
            media="(min-width: 768px)"
            srcSet={`${tablet1x} 1x, ${tablet2x} 2x`}
          />

          <img
            src={mobile1x}
            srcSet={`${mobile2x} 2x`}
            alt="Office work environment"
            className={styles.image}
          />
        </picture>

        <div className={styles.overlay}>
          <div className={styles.container}>
            <h1 className={styles.title}>
              Effective Solutions for Your Business
            </h1>
            <Button onClick={() => setIsModalOpen(true)}>Order Service</Button>
          </div>
        </div>
      </div>
      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      ></FormModal>
    </section>
  );
};
