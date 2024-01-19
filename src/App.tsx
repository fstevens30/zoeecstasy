import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import Nav from "./components/Nav/Nav";

import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
