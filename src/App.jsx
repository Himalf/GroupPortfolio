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
        </Routes>
      </Router>
    </main>
  );
}

export default App;
