import "./App.css";
import Skills from "./Components/Skills/Skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "../src/components/homepage/HeroSection";

function App() {
  return (
    <main>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
