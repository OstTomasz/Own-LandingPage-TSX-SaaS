import styles from "./ContactsPage.module.scss";

import { ContactInfo } from "@/components/ui/ContactInfo/ContactInfo";
import { ContactSocials } from "@/components/ui/ContactSocials/ContactSocials";
import { OrderForm } from "@/components/ui/OrderForm/OrderForm";
import { GoogleMap } from "@/components/ui/GoogleMaps/GoogleMap";

export const ContactsPage = () => {
  return (
    <section className={styles.contactsSection}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* Kolumna Lewa: Informacje */}
          <div className={styles.infoSide}>
            <ContactInfo />
            <ContactSocials />
          </div>

          {/* Kolumna Prawa: Formularz */}
          <div className={styles.formSide}>
            <OrderForm onSuccess={() => {}} />
          </div>
        </div>

        {/* Pełna szerokość pod spodem: Mapa */}
        <div className={styles.mapSection}>
          <GoogleMap />
        </div>
      </div>
    </section>
  );
};
