"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/enterprise", label: "Our Work" },
  { href: "/business-units", label: "Business Units" },
  { href: "/projects", label: "Projects" },
  { href: "/impact", label: "Impact" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled 
          ? "bg-background/98 backdrop-blur-md shadow-sm" 
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}>
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="/images/edym%20village%20logo.png"
              alt="EDYM Herbal Hub Logo"
              className="h-8 sm:h-10 md:h-12 w-auto"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4 xl:space-x-6">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-xs xl:text-sm font-medium transition-colors relative pb-1 px-1 xl:px-0",
                    active
                      ? "text-[#0F6131] font-semibold"
                      : "text-muted-foreground hover:text-[#0F6131]"
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0F6131] rounded-full"></span>
                  )}
                </Link>
              );
            })}
            <Button asChild size="sm" className="ml-2 xl:ml-0">
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>

          {/* Tablet Navigation - Compact */}
          <div className="hidden md:flex lg:hidden md:items-center md:space-x-2">
            {navItems.slice(0, 4).map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-xs font-medium transition-colors relative pb-1 px-1",
                    active
                      ? "text-[#0F6131] font-semibold"
                      : "text-muted-foreground hover:text-[#0F6131]"
                  )}
                >
                  {item.label.length > 10 ? item.label.substring(0, 8) + "..." : item.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0F6131] rounded-full"></span>
                  )}
                </Link>
              );
            })}
            <Button asChild size="sm" className="ml-1">
              <Link href="/contact">Partner</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 touch-manipulation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
    
    {/* Mobile Navigation - Rendered outside nav for proper z-index stacking */}
    <AnimatePresence mode="wait">
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-black/60"
            onClick={() => setMobileMenuOpen(false)}
            style={{ zIndex: 99998 }}
          />
          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-gray-900 border-l-2 border-[#0F6131]/20 shadow-2xl overflow-y-auto"
            style={{ zIndex: 99999 }}
          >
            <div className="pt-20 pb-6 px-4">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block px-4 py-3 text-base font-medium transition-colors border-l-4 rounded-r-lg touch-manipulation min-h-[44px] flex items-center",
                        active
                          ? "text-[#0F6131] font-semibold border-[#0F6131] bg-[#0F6131]/10"
                          : "text-gray-700 dark:text-gray-300 hover:text-[#0F6131] hover:bg-gray-100 dark:hover:bg-gray-800 border-transparent"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="px-4 pt-6 pb-2">
                  <Button asChild className="w-full min-h-[44px] text-base bg-[#0F6131] hover:bg-[#0F6131]/90 text-white" size="lg">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Partner With Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
