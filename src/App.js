import "./App.css";
// App.js
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Contact />
    </div>
  );
}

export default App;