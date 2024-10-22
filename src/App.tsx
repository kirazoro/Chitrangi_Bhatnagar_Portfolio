import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-gray-900"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-t-4 border-gold-500 border-solid rounded-full"
          ></motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen dark"
        >
          <div className="bg-gray-900 text-gray-100 transition-colors duration-300">
            <Header />
            <main className="relative">
              <div className="absolute inset-0 bg-wave-pattern bg-repeat-x bg-bottom opacity-10 pointer-events-none"></div>
              <About />
              <Projects />
              <Internships />
              <Skills />
              <Blog />
              <Contact />
            </main>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;