import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  User,
  // Image,
  // Newspaper,
  Quote,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompaniesOpen, setIsCompaniesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCompaniesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsCompaniesOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <nav className="bg-white/40 backdrop-blur-md text-gray-800 shadow-lg sticky top-0 z-50 border-b border-white/20 w-full">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-3">
          {/* Logo */}
            <Link
            to="/"
            className="group flex items-center py-2 flex-shrink-0 z-50"
          >
            <img
              src="/images/baksh1.png"
              alt="Baksh Group Logo"
              className="h-12 w-auto mr-2"
            />
          </Link>  

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-2">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/about">ABOUT</NavLink>


            {/* Companies Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsCompaniesOpen(true)}
              onMouseLeave={() => setIsCompaniesOpen(false)}
            >
              <button className="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 flex items-center">
                GROUP OF COMPANIES
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isCompaniesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isCompaniesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 z-50"
                  >
                    <DropdownLink
                      to="/about#overview"
                      title="Baksh Group"
                      // desc="Financial Services"
                      // img="/images/Bakhs_group.jpg"
                    />
                    <DropdownLink
                      to="/about#baksh-investment"
                      title="Baksh Shipping Lines (Pvt) Ltd"
                      // desc="Financial Services"
                      // img="/images/bakhs_limited.jpg"
                    />
                    <DropdownLink
                      to="/about#yaaseen-shipping"
                      title="Yaaseen Shipping Lines"
                      // desc="Global Shipping"
                      // img="/images/yaseen_logo.png"
                    />
                    <DropdownLink
                      to="/about#yaaseen-pvt"
                      title="Yaaseen Shipping Lines (Pvt) Ltd"
                      // desc="Global Shipping"
                      // img="/images/yaseen_logo.png"
                    />
                    <DropdownLink
                      to="/about#uosl"
                      title="UOSL Shipping & Logistics (Pvt) Ltd"
                      // // desc="End-to-end logistics"
                      // img="/images/uosl_logo.jpg"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
  <button
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsServicesOpen(!isServicesOpen);
    }}
    className="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 flex items-center bg-transparent border-none cursor-pointer"
  >
    SERVICES
    <ChevronDown
      className={`ml-1 h-4 w-4 transition-transform ${
        isServicesOpen ? "rotate-180" : ""
      }`}
    />
  </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute mt-2 w-60 bg-white rounded-xl shadow-xl border border-gray-100 z-50"
                  >
                    <DropdownItem to="/services/1" label="Liner Agency" />
                    <DropdownItem to="/services/2" label="Freight Forwarding" />
                    <DropdownItem to="/services/3" label="Transportation" />
                    <DropdownItem to="/services/4" label="Depot Service" />
                    <DropdownItem to="/services/5" label="Vessel Handling" />
                    <DropdownItem to="/services/6" label="Chartering and Stevedoring" />
                    <DropdownItem to="/services/7" label="Project Cargo Handling" />
                    <DropdownItem to="/services/8" label="Ship Husbandry" /> 
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/gallery">
              GALLERY
            </NavLink>
            <NavLink to="/News">
            NEWS
            </NavLink>
            <NavLink to="/tariffs">TARIFFS</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
            <NavLink to="/schedule">VESSEL SCHEDULE</NavLink>

            {/* Right side */}
            <NavLink to="/login">
              <User className="w-4 h-4 mr-1" /> LOGIN
            </NavLink>
            <Link
              to="/quote"
              className="px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm hover:from-blue-700 hover:to-blue-800 transition"
            >
              <Quote className="w-4 h-4 mr-1 inline" /> GET QUOTE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-white/30"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-2">
              <MobileLink to="/" label="HOME" />
              <MobileLink to="/about" label="ABOUT" />

              {/* Mobile Companies */}
              <button
                onClick={() => setIsCompaniesOpen(!isCompaniesOpen)}
                className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-700 hover:bg-blue-50 rounded-lg"
              >
                GROUP OF COMPANIES
                <ChevronDown
                  className={`h-5 w-5 transition ${
                    isCompaniesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isCompaniesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-6 space-y-1"
                  >
                    <MobileLink to="/about#overview" label="Baksh Group" />
                    <MobileLink
                      to="/about#baksh-investment"
                      label="Baksh Shipping Lines (Pvt) Ltd"
                    />
                    <MobileLink
                      to="/about#yaaseen-shipping"
                      label="Yaaseen Shipping Lines"
                    />
                    <MobileLink
                      to="/about#yaaseen-pvt"
                      label="Yaaseen Shipping Lines (Pvt) Ltd"
                    />
                    <MobileLink
                      to="/about#uosl"
                      label="UOSL Shipping & Logistics (Pvt) Ltd"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile Services */}
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-700 hover:bg-blue-50 rounded-lg"
              >
                SERVICES
                <ChevronDown
                  className={`h-5 w-5 transition ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-6 space-y-1"
                  >
                    <MobileLink to="/services/1" label="Liner Agency" />
                    <MobileLink to="/services/2" label="Freight Forwarding" />
                    <MobileLink to="/services/3" label="Transportation" />
                    <MobileLink to="/services/4" label="Depot Services" />
                    <MobileLink to="/services/5" label="Vessel Handling" />
                    <MobileLink to="/services/6" label="Chartering and Stevedoring"/>
                    <MobileLink to="/services/7" label="Project Cargo Handling" />
                     <MobileLink to="/services/8" label="Ship Husbandry" /> 
                  </motion.div>
                )}
              </AnimatePresence>
              <MobileLink to="/gallery" label="GALLERY" />
              <MobileLink to="/news" label="NEWS" />
              <MobileLink to="/tariffs" label="TARIFFS" />
              <MobileLink to="/schedule" label="VESSEL SCHEDULE" />
              <MobileLink to="/contact" label="CONTACT" />
              <MobileLink to="/login" label="LOGIN" icon={<User />} />
              <Link
                to="/quote"
                className="block text-center px-4 py-2 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg"
              >
                GET QUOTE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Helper Components
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-white/30 rounded-lg flex items-center"
  >
    {children}
  </Link>
);

const DropdownLink = ({
  to,
  title,
  // desc,
  // img,
}: {
  to: string;
  title: string;
  // desc: string;
  // img: string;
}) => (
  <Link
    to={to}
    className="flex items-center px-4 py-3 hover:bg-blue-50 transition"
  >
    {/* <img src={img} alt={title} className="w-8 h-8 rounded-md mr-3" /> */}
    <div className="flex-1">
      <div className="font-medium">{title}</div>
      {/* <div className="text-xs text-gray-500">{desc}</div> */}
    </div>
  </Link>
);

const DropdownItem = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
  >
    {label}
  </Link>
);

const MobileLink = ({
  to,
  label,
  icon,
}: {
  to: string;
  label: string;
  icon?: React.ReactNode;
}) => (
  <Link
    to={to}
    className="flex items-center px-4 py-3 text-base text-gray-700 hover:bg-blue-50 rounded-lg"
  >
    {icon && <span className="mr-3">{icon}</span>}
    {label}
  </Link>
);

export default Navigation;