import styles from "./ContactsPage.module.scss";
import { ContactInfo } from "@/components/sections/ContactInfo/ContactInfo";
import { GoogleMap } from "@/components/ui/GoogleMaps/GoogleMap";
import { ContactSocials } from "@/components/sections/ContactSocials/ContactSocials";
import { OrderForm } from "@/components/sections/OrderForm/OrderForm";

export const ContactsPage = () => {
  return (
    <section className={styles.contactsSection}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          <div className={styles.infoSide}>
            <ContactInfo />
            <ContactSocials />
          </div>

          <div className={styles.formSide}>
            <OrderForm onSuccess={() => {}} />
          </div>
        </div>

        <div className={styles.mapSection}>
          <GoogleMap />
        </div>
      </div>
    </section>
  );
};
