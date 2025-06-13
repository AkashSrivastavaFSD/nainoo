import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Index from "./components/index.js";
import About from "./components/about.js";
import Contact from "./components/contact.js";
import Product from "./components/product.js";
import Team from "./components/team.js";
import Testimonial from "./components/testimonial.js";
import FAQ from "./components/faq.js";
import Tc from "./components/tc.js";
import Gallery from "./components/gallery.js";
import NotFound from "./components/404.js";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/tc" element={<Tc />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
