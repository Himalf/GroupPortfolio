import ContactUs from "./components/ContactUs";
import "./App.css";
import Skills from "./Components/Skills/Skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "../src/components/homepage/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Homepage />
      <Skills />
      <ContactUs />
    </main>
  );
}

export default App;
