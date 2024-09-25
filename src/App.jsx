import styles from "./App.module.css";
import { Navbar } from "./components/NavBar/Navbar";
import { About } from "./pages/About/About";
import { Experience } from "./pages/Experience/Experience";
import { Projects } from "./pages/Projects/Projects";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
