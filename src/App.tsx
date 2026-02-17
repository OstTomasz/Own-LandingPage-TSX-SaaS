import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { HomePage } from "./pages/HomePage/HomePage";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import { PortfolioPage } from "./pages/PortfolioPage/PortfolioPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

import { MainLayout } from "./layouts/MainLayout/MainLayout";

export const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
