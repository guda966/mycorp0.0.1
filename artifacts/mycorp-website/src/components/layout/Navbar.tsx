import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Building2, ChevronDown, ChevronRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { servicesData } from "@/data/servicesData";
import { useTheme } from "@/contexts/ThemeContext";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  const isServicesActive = location === "/services" || location.startsWith("/services/");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
        isScrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-border shadow-sm py-3"
          : "bg-white dark:bg-slate-900 border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-white p-1.5 rounded-lg group-hover:scale-105 transition-transform">
            <Building2 className="w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-foreground">
            MyCorp<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary relative py-1",
              location === "/" ? "text-primary" : "text-muted-foreground"
            )}
          >
            Home
            {location === "/" && (
              <motion.div layoutId="navbar-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
            )}
          </Link>

          <Link
            href="/about"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary relative py-1",
              location === "/about" ? "text-primary" : "text-muted-foreground"
            )}
          >
            About Us
            {location === "/about" && (
              <motion.div layoutId="navbar-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
            )}
          </Link>

          {/* Services Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-1 flex items-center gap-1",
                isServicesActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              Services
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", servicesOpen && "rotate-180")} />
              {isServicesActive && (
                <motion.div layoutId="navbar-indicator" className="absolute bottom-0 left-0 right-8 h-0.5 bg-primary rounded-full" />
              )}
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-border overflow-hidden z-50"
                >
                  <div className="p-2">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 text-sm font-semibold text-foreground group"
                    >
                      All Services
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                    <div className="border-t border-border mx-2 my-1" />
                    {servicesData.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 group transition-colors"
                        >
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{service.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/careers"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary relative py-1",
              location === "/careers" ? "text-primary" : "text-muted-foreground"
            )}
          >
            Careers
            {location === "/careers" && (
              <motion.div layoutId="navbar-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
            )}
          </Link>

          {/* Theme toggle only */}
          <div className="flex items-center gap-1.5 pl-1">
            <button
              onClick={toggleTheme}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === "dark"
                ? <Sun className="w-4 h-4" />
                : <Moon className="w-4 h-4" />}
            </button>
          </div>

          <a href="mailto:mycorpsolutionsteam@gmail.com?subject=Consultation%20Request">
            <Button className="rounded-full px-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
              Get Started
            </Button>
          </a>
        </nav>

        {/* Mobile right cluster */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={cn("text-base font-medium px-3 py-2.5 rounded-xl", location === "/" ? "bg-primary/5 text-primary" : "text-foreground")}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={cn("text-base font-medium px-3 py-2.5 rounded-xl", location === "/about" ? "bg-primary/5 text-primary" : "text-foreground")}
              >
                About Us
              </Link>

              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={cn(
                    "w-full flex items-center justify-between text-base font-medium px-3 py-2.5 rounded-xl",
                    isServicesActive ? "bg-primary/5 text-primary" : "text-foreground"
                  )}
                >
                  Services
                  <ChevronDown className={cn("w-4 h-4 transition-transform", mobileServicesOpen && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-1 flex flex-col gap-1">
                        <Link
                          href="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm font-semibold px-3 py-2 rounded-lg text-primary hover:bg-primary/5"
                        >
                          All Services →
                        </Link>
                        {servicesData.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-foreground hover:bg-slate-50 dark:hover:bg-slate-800"
                            >
                              <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0`}>
                                <Icon className="w-3.5 h-3.5 text-white" />
                              </div>
                              {service.title}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className={cn("text-base font-medium px-3 py-2.5 rounded-xl", location === "/careers" ? "bg-primary/5 text-primary" : "text-foreground")}
              >
                Careers
              </Link>

              <a href="mailto:mycorpsolutionsteam@gmail.com?subject=Consultation%20Request" className="block mt-4" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full rounded-xl">Get Started</Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
