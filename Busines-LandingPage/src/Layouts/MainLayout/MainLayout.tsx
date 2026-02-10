import { Outlet } from "react-router-dom";
import { Header } from "@/components/common/Header/Header";
import styles from "./MainLayout.module.scss";
// import { Footer } from "@/components/common/Footer/Footer";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};
