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
const YaaseenAbout = React.lazy(() => import('./pages/YaaseenAbout'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Quote = React.lazy(() => import('./pages/Quote'));
const BakshInvestment = React.lazy(() => import('./pages/BakshInvestment'));
const BakshGroup = React.lazy(() => import('./pages/BakshGroup'));
const YaaseenShippingPVT = React.lazy(() => import('./pages/YaaseenShippingPVT'));
const UOSL = React.lazy(() => import('./pages/UOSL'));
const Contact = React.lazy(() => import('./pages/Contact'));
const EServices = React.lazy(() => import('./pages/EServices'));
const EServiceDetail = React.lazy(() => import('./pages/EServiceDetail'));
const Tariffs = React.lazy(() => import('./pages/Tariffs'));
const Schedule = React.lazy(() => import('./pages/Schedule'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Blogs = React.lazy(() => import('./pages/Blogs'));
const Login = React.lazy(() => import('./pages/Login'));

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
        <div className="App min-h-screen bg-black text-white">

          <Toaster
            position="top-right"
            gutter={8}
            containerClassName="z-50"
            toastOptions={{
              duration: 4000,
              className: 'bg-gray-900 border border-gray-700 shadow-lg rounded-lg text-white',
              success: {
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#000000',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#000000',
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
                  path="/baksh-group"
                  element={
                    <Layout>
                      <AnimatedRoute>
                        <BakshGroup />
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
                  path="/yaaseen-shipping-pvt"
                  element={
                    <Layout>
                      <AnimatedRoute>
                        <YaaseenShippingPVT />
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
                  path="/yaaseen-about"
                  element={
                    <Layout>
                      <AnimatedRoute>
                        <YaaseenAbout />
                      </AnimatedRoute>
                    </Layout>
                  }
                />
                <Route
                  path="/gallery"
                  element={
                    <Layout>
                      <AnimatedRoute>
                        <Gallery />
                      </AnimatedRoute>
                    </Layout>
                  }
                />
                <Route
                  path="/blogs"
                  element={
                    <Layout>
                      <AnimatedRoute>
                        <Blogs />
                      </AnimatedRoute>
                    </Layout>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <Layout>
                      <AnimatedRoute>
                        <Login />
                      </AnimatedRoute>
                    </Layout>
                  }
                />
                <Route
                  path="/quote"
                  element={
                    <Layout>
                      <AnimatedRoute>
                        <Quote />
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
                  path="/services"
                  element={
                    <Layout>
                      <AnimatedRoute>
                        <EServices />
                      </AnimatedRoute>
                    </Layout>
                  }
                />
                <Route
                  path="/services/:id"
                  element={
                    <Layout>
                      <AnimatedRoute>
                        <EServiceDetail />
                      </AnimatedRoute>
                    </Layout>
                  }
                />
                {/* Backward compatibility redirect */}
                <Route path="/eservices" element={<Navigate to="/services" replace />} />
                <Route path="/eservices/:id" element={<Navigate to="/services/:id" replace />} />
                <Route
                  path="/tariffs"
                  element={
                    <Layout>
                      <AnimatedRoute>
                        <Tariffs />
                      </AnimatedRoute>
                    </Layout>
                  }
                />
                <Route
                  path="/schedule"
                  element={
                    <Layout>
                      <AnimatedRoute>
                        <Schedule />
                      </AnimatedRoute>
                    </Layout>
                  }
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
