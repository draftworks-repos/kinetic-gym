"use client";

import React from "react";
import Image from "next/image";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="contact" className="kinetic-footer" aria-label="Site Footer">
      <div className="footer-container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <Image
                src="/assets/aistudio/logo.png"
                alt="Kinetic Gym Athletic Lab Logo"
                width={180}
                height={42}
                className="footer-brand-logo-img"
              />
            </div>

            <p className="footer-brand-desc">
              Engineering high-intensity physical conditioning, elite strength
              protocols, and architectural athletic wellness for peak human
              performance.
            </p>

            <div className="footer-socials" aria-label="Social Media Channels">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-circle"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-circle"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-circle"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-circle"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-circle"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="footer-col-title">NAVIGATION</h3>
            <nav
              className="footer-nav-links"
              aria-label="Footer Quick Navigation"
            >
              <a href="/about" className="footer-link">
                About Facility
              </a>
              <a href="#services" className="footer-link">
                Programs
              </a>
              <a href="#coaches" className="footer-link">
                Coaching Staff
              </a>
              <a href="/contact" className="footer-link">
                Contact Us
              </a>
              <a href="#faq" className="footer-link">
                Terms
              </a>
              <a href="#faq" className="footer-link">
                Privacy Policy
              </a>
              <a href="#faq" className="footer-link">
                Facility Protocol
              </a>
            </nav>
          </div>

          {/* Schedule & Hub Column */}
          <div>
            <h3 className="footer-col-title">SCHEDULE & HUB</h3>
            <div className="footer-info-list">
              <div className="footer-info-row">
                <Clock className="footer-info-icon" />
                <div>
                  <span className="info-highlight-title">OPERATING HOURS</span>
                  <div>Mon - Fri: 5:00 AM - 11:00 PM</div>
                  <div>Sat - Sun: 7:00 AM - 9:00 PM</div>
                </div>
              </div>

              <div className="footer-info-row">
                <MapPin className="footer-info-icon" />
                <div>
                  <span className="info-highlight-title">Facility Address</span>
                  <div>742 Kinetic Blvd, Sector 4, Metropolis</div>
                </div>
              </div>

              <div className="footer-info-row">
                <Phone className="footer-info-icon" />
                <div>
                  <span className="info-highlight-title">CONTACT NUMBER</span>
                  <a
                    href="tel:+18005554696"
                    className="hover:text-orange-600 transition-colors"
                  >
                    +91 89596 90529
                  </a>
                </div>
              </div>

              <div className="footer-info-row">
                <Mail className="footer-info-icon" />
                <div>
                  <span className="info-highlight-title">DIRECT INQUIRIES</span>
                  <a
                    href="mailto:train@kineticgym.com"
                    className="hover:text-orange-600 transition-colors"
                  >
                    hello@draftworks.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Container below separator with #eaeffc background */}
      <div className="footer-bottom-wrapper">
        <div className="footer-container">
          <div className="footer-bottom-bar">
            <div>
              &copy; 2025 Kinetic Gym Performance Labs. All rights reserved.
            </div>
            <div className="footer-bottom-links">
              Design & Developed by{" "}
              <a href="https://draftworks.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-bottom-link">
                draftworks.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
