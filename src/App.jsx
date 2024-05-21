import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About-Us/About-Us.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Clients from "./pages/Clients/Clients.jsx";
import Certificates from "./pages/Certificates/Certificates.jsx";
import Contact from "./pages/Contact-Us/Contact-Us.jsx";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./index.css"; // Ensure this path is correct

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-16"> {/* Add this div with padding-top */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About-Us" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="/Contact-Us" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
