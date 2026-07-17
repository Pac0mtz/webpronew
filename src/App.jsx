import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function PageWrap({ children }) {
  return (
    <>
      <motion.div
        className="page-curtain"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "top" }}
      />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.main>
    </>
  );
}

function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}

export default function App() {
  const location = useLocation();
  useSmoothScroll();

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
            path="/services/:slug"
            element={
              <PageWrap>
                <ServiceDetail />
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
