import styles from "./App.module.css";
import { Navbar } from "./components/NavBar/Navbar";
import { About } from "./pages/About/About";
import { Experience } from "./pages/Experience/Experience";
import { Projects } from "./pages/Projects/Projects";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProjectArticle } from "./pages/ProjectArticle/ProjectArticle";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectArticle />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
