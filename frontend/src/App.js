import React from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <section className="hero">
        <h2>Welcome to Our Website</h2>
        <p>We build modern web experiences.</p>
      </section>

      <Contact />
    </div>
  );
}

export default App;