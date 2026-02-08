import { Route, Routes, NavLink } from "react-router-dom";
import "./App.scss";
import { HomePage } from "./pages/homePage/HomePage";
import { ContactsPage } from "./pages/contactsPage/ContactsPage";
import { PortfolioPage } from "./pages/portfolioPage/PortfolioPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
