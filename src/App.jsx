import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Contact from "./pages/Contact";
import GoalPage from "./pages/GoalPage";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop";
import NavbarLeftLogo from "./components/NavbarLeftLogo";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
      {/* <NavbarLeftLogo/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/goal" element={<GoalPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* <BackToTop /> */}
    </BrowserRouter>
  );
}

export default App;