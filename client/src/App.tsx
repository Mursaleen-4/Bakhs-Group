import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from './components/Layout';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorBoundary } from './components/ErrorBoundary';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const BakshInvestment = React.lazy(() => import('./pages/BakshInvestment'));
const UOSL = React.lazy(() => import('./pages/UOSL'));
const Contact = React.lazy(() => import('./pages/Contact'));
const EServices = React.lazy(() => import('./pages/EServices'));
const EServiceDetail = React.lazy(() => import('./pages/EServiceDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));


const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <LoadingSpinner size="lg" message="Loading page..." />
  </div>
);

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
};

const AnimatedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    className="w-full"
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        {/* ⚠️ Remove AuthProvider if it doesn't exist */}
        {/* <AuthProvider> */}
        <div className="App min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">

          <Toaster
            position="top-right"
            gutter={8}
            containerClassName="z-50"
            toastOptions={{
              duration: 4000,
              className: 'bg-white border border-gray-200 shadow-lg rounded-lg',
              success: {
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#ffffff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#ffffff',
                },
              },
            }}
          />

          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait" initial={false}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Layout>
                      <AnimatedRoute>
                        <Home />
                      </AnimatedRoute>
                    </Layout>
                  }
                />
                <Route
                  path="/baksh-investment"
                  element={
                    <Layout>
                      <AnimatedRoute>
                        <BakshInvestment />
                      </AnimatedRoute>
                    </Layout>
                  }
                  />
                 <Route
                  path="/UOSL"
                  element={
                    <Layout>
                      <AnimatedRoute>
                        <UOSL />
                      </AnimatedRoute>
                    </Layout>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <Layout>
                      <AnimatedRoute>
                        <About />
                      </AnimatedRoute>
                    </Layout>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <Layout>
                      <AnimatedRoute>
                        <Contact />
                      </AnimatedRoute>
                    </Layout>
                  }
                />
                <Route
                  path="/eservices"
                  element={
                    <Layout>
                      <AnimatedRoute>
                        <EServices />
                      </AnimatedRoute>
                    </Layout>
                  }
                />
                <Route
                  path="/eservices/:id"
                  element={
                    <Layout>
                      <AnimatedRoute>
                        <EServiceDetail />
                      </AnimatedRoute>
                    </Layout>
                  }
                />
                <Route

                />

                <Route path="/home" element={<Navigate to="/" replace />} />

                <Route
                  path="*"
                  element={
                    <AnimatedRoute>
                      <Layout>
                        <NotFound />
                      </Layout>
                    </AnimatedRoute>
                  }
                />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </div>
        {/* </AuthProvider> */}
      </Router>
    </ErrorBoundary>
  );
}

export default App;
