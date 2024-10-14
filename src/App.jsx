import styles from "./App.module.css";
import { Navbar } from "./components/NavBar/Navbar";
import { About } from "./pages/About/About";
import { Experience } from "./pages/Experience/Experience";
import { Projects } from "./pages/Projects/Projects";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ProjectArticle } from "./pages/ProjectArticle/ProjectArticle";
import { AnimatePresence } from "framer-motion";
import {
  PageTransition,
  ProjectPageTransition,
} from "./components/PageTransition/PageTransition";

function AppContent() {
  const location = useLocation();

  return (
    <div className={styles.App}>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/experience"
            element={
              <PageTransition>
                <Experience />
              </PageTransition>
            }
          />
          <Route
            path="/projects/:id"
            element={
              <ProjectPageTransition>
                <ProjectArticle />
              </ProjectPageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
