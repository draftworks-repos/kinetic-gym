"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X, PhoneCall } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`kinetic-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Brand Logo */}
        <Link
          href="/"
          className="brand-wrapper"
          aria-label="Kinetic Gym Athletic Lab Homepage"
        >
          <Image
            src="/assets/aistudio/logo.png"
            alt="Kinetic Gym Athletic Lab Logo"
            width={180}
            height={40}
            className="brand-logo-img"
          />
        </Link>

        {/* Desktop Links */}
        <nav className="nav-links-desktop" aria-label="Main Navigation">
          <Link href="/#transformation" className="nav-link-item">
            Before/After
          </Link>
          <Link href="/facility" className="nav-link-item">
            FACILITY
          </Link>
          <Link href="/about" className="nav-link-item">
            ABOUT US
          </Link>
          <Link href="/contact" className="nav-link-item">
            CONTACT US
          </Link>
        </nav>

        {/* Action Button - Redirects directly to Call */}
        <div className="nav-actions">
          <a
            href="tel:+18005554696"
            className="btn-join-now"
            aria-label="Join Kinetic Gym - Call Directly"
          >
            <span>JOIN NOW</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={
              mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"
            }
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? "is-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-inner">
          <a
            href="#services"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
            tabIndex={mobileMenuOpen ? 0 : -1}
          >
            SERVICES
          </a>
          <a
            href="#gallery"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
            tabIndex={mobileMenuOpen ? 0 : -1}
          >
            GALLERY
          </a>
          <a
            href="/about"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
            tabIndex={mobileMenuOpen ? 0 : -1}
          >
            ABOUT US
          </a>
          <a
            href="#coaches"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
            tabIndex={mobileMenuOpen ? 0 : -1}
          >
            COACHES
          </a>
          <a
            href="#faq"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
            tabIndex={mobileMenuOpen ? 0 : -1}
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
            tabIndex={mobileMenuOpen ? 0 : -1}
          >
            CONTACT US
          </a>
          <a
            href="tel:+18005554696"
            className="btn-join-now mt-2 w-full justify-center"
            onClick={() => setMobileMenuOpen(false)}
            tabIndex={mobileMenuOpen ? 0 : -1}
          >
            <PhoneCall className="w-4 h-4" />
            <span>CALL TO JOIN (800) 555-4696</span>
          </a>
        </div>
      </div>
    </header>
  );
}
