import React from "react";
import TwoSwiper from "./components/TwoSwiper";
import { HeaderLayout } from "./layouts/header";
import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ServicePage } from "./pages/ServicePage";
import { CoursesPage } from "./pages/CoursesPage";
import { AllServicePage } from "./pages/AllServicePage";
import { AboutPage } from "./pages/AboutPage";

const App = () => {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/services/:service" element={<ServicePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/services" element={<AllServicePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


// git add .
// git commit -m "Reguler"
// git push origin main