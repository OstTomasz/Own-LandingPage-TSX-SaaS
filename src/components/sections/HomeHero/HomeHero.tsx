import { useState } from "react";
import styles from "./HomeHero.module.scss";

import mobile1x from "@/assets/images/headline-background-mini.jpg";
import mobile2x from "@/assets/images/headline-background-mini@2x.jpg";
import tablet1x from "@/assets/images/headline-background-mid.jpg";
import tablet2x from "@/assets/images/headline-background-mid@2x.jpg";
import desktop1x from "@/assets/images/headline-background-max.jpg";
import desktop2x from "@/assets/images/headline-background-max@2x.jpg";

import { OrderForm } from "../OrderForm/OrderForm";

import { Modal } from "@/components/ui/Modal/Modal";
import { Button } from "@/components/ui/Button/Button";

export const HomeHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.hero} aria-label="Hero">
      <div
        className={styles.heroInner}
        style={
          {
            "--bg-mobile": `url(${mobile1x})`,
            "--bg-mobile-2x": `url(${mobile2x})`,
            "--bg-tablet": `url(${tablet1x})`,
            "--bg-tablet-2x": `url(${tablet2x})`,
            "--bg-desktop": `url(${desktop1x})`,
            "--bg-desktop-2x": `url(${desktop2x})`,
          } as React.CSSProperties
        }
      >
        <div className={styles.container}>
          <h1 className={styles.title}>
            Effective Solutions for Your Business
          </h1>
          <Button onClick={() => setIsModalOpen(true)}>Order Service</Button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <OrderForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
};
