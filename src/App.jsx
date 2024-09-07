import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import Home from "./pages/Home";
import Models from "./pages/Models";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
