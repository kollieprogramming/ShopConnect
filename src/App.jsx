
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Contact from "./pages/Contact.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Router>
        <div style={{ fontFamily: "Arial, sans-serif" }}>
          <nav
            style={{
              backgroundColor: "#333",
              padding: "18px",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Link to="/" style={{ color: "white" }}>Accueil</Link>
            <Link to="/about" style={{ color: "white" }}>À propos</Link>
            <Link to="/products" style={{ color: "white" }}>Produits</Link>
            <Link to="/contact" style={{ color: "white" }}>Contact</Link>
          </nav>

          <main style={{ padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />}>
                <Route path=":id" element={<ProductDetails />} />
              </Route>
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}
