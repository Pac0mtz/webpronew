import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function PageWrap({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <Preloader />
      <div className="grain" />
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrap>
                <Home />
              </PageWrap>
            }
          />
          <Route
            path="/services"
            element={
              <PageWrap>
                <Services />
              </PageWrap>
            }
          />
          <Route
            path="/portfolio"
            element={
              <PageWrap>
                <Portfolio />
              </PageWrap>
            }
          />
          <Route
            path="/portfolio/:slug"
            element={
              <PageWrap>
                <PortfolioDetail />
              </PageWrap>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrap>
                <About />
              </PageWrap>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrap>
                <Contact />
              </PageWrap>
            }
          />
          <Route
            path="*"
            element={
              <PageWrap>
                <NotFound />
              </PageWrap>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
