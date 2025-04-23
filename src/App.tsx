import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Download from "./pages/Download";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-0 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
