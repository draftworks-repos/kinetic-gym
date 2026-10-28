'use client';

import React from 'react';
import { Zap, ExternalLink, Maximize2, MapPin } from 'lucide-react';
import './CtaBanner.css';

export default function CtaBanner() {
  return (
    <section className="cta-banner-section" aria-label="Call to Action">
      <div className="cta-banner-container">
        <div className="cta-banner-card">
          {/* Left Column Content */}
          <div className="cta-left-content">
            <h2 className="cta-banner-headline">
              READY TO <br />
              TRANSFORM YOUR <br />
              FITNESS JOURNEY?
            </h2>

            <p className="cta-banner-subtext">
              Start today with our zero-commitment 3 Days Free Trial. Experience the
              facility, join any class, and meet your coach with no upfront payment.
            </p>

            <div className="cta-actions-group">
              <a
                href="tel:+18005554696"
                className="btn-cta-claim"
                aria-label="Call directly to claim 3 days free trial"
              >
                <span>CLAIM 3 DAYS FREE TRIAL</span>
                <Zap className="w-4 h-4 fill-amber-500 text-amber-500 stroke-[1.5]" />
              </a>

              <span className="cta-location-text">
                or visit 742 Kinetic Blvd
              </span>
            </div>
          </div>

          {/* Right Column Google Maps Card matching cta_0cbab4b6.png */}
          <div className="cta-map-wrapper" role="region" aria-label="Interactive Google Map Preview">
            {/* Stylized Google Maps Canvas SVG */}
            <svg
              className="cta-map-canvas"
              viewBox="0 0 540 380"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Landmass background */}
              <rect width="540" height="380" fill="#f4f3f0" />

              {/* Water (East River) */}
              <path
                d="M 440 0 C 430 80, 460 180, 435 270 C 420 330, 410 380, 410 380 L 540 380 L 540 0 Z"
                fill="#aadaff"
              />
              <text x="475" y="290" fill="#6996bf" fontSize="9" fontWeight="600" transform="rotate(75, 475, 290)">
                East River
              </text>

              {/* Green Park Areas */}
              <rect x="390" y="90" width="35" height="40" rx="3" fill="#cceacc" />
              <text x="408" y="112" fill="#588558" fontSize="8" textAnchor="middle">
                Stuyvesant
              </text>

              {/* Major Avenues (Vertical/Diagonal Grid) */}
              {/* FDR Drive */}
              <path d="M 430 0 C 420 90, 450 180, 425 280 L 400 380" stroke="#fcd8a5" strokeWidth="6" fill="none" />
              <path d="M 430 0 C 420 90, 450 180, 425 280 L 400 380" stroke="#fcd8a5" strokeWidth="4" fill="none" />

              {/* 1st Ave */}
              <line x1="420" y1="0" x2="380" y2="380" stroke="#ffffff" strokeWidth="8" />
              <line x1="420" y1="0" x2="380" y2="380" stroke="#ffebb3" strokeWidth="5" />
              <text x="415" y="320" fill="#888888" fontSize="8" transform="rotate(78, 415, 320)">1st Ave</text>

              {/* 2nd Ave */}
              <line x1="385" y1="0" x2="345" y2="380" stroke="#ffffff" strokeWidth="8" />
              <line x1="385" y1="0" x2="345" y2="380" stroke="#ffebb3" strokeWidth="5" />
              <text x="375" y="300" fill="#888888" fontSize="8" transform="rotate(78, 375, 300)">2nd Ave</text>

              {/* 3rd Ave */}
              <line x1="350" y1="0" x2="310" y2="380" stroke="#ffffff" strokeWidth="8" />
              <line x1="350" y1="0" x2="310" y2="380" stroke="#ffebb3" strokeWidth="5" />

              {/* Lexington Ave */}
              <line x1="320" y1="0" x2="280" y2="380" stroke="#ffffff" strokeWidth="7" />
              <line x1="320" y1="0" x2="280" y2="380" stroke="#ffebb3" strokeWidth="4" />

              {/* Park Ave */}
              <line x1="290" y1="0" x2="250" y2="380" stroke="#ffffff" strokeWidth="8" />
              <line x1="290" y1="0" x2="250" y2="380" stroke="#ffebb3" strokeWidth="5" />
              <text x="375" y="140" fill="#777777" fontSize="8" transform="rotate(78, 375, 140)">Park Ave</text>

              {/* Madison Ave */}
              <line x1="260" y1="0" x2="220" y2="380" stroke="#ffffff" strokeWidth="7" />
              <line x1="260" y1="0" x2="220" y2="380" stroke="#ffebb3" strokeWidth="4" />
              <text x="350" y="195" fill="#777777" fontSize="8" transform="rotate(78, 350, 195)">Madison Ave</text>

              {/* 5th Ave (Primary) */}
              <line x1="230" y1="0" x2="190" y2="380" stroke="#ffffff" strokeWidth="10" />
              <line x1="230" y1="0" x2="190" y2="380" stroke="#ffe39f" strokeWidth="6" />
              <text x="335" y="240" fill="#777777" fontSize="8" transform="rotate(78, 335, 240)">5th Ave</text>

              {/* Broadway (Angled diagonal cutting across) */}
              <line x1="320" y1="0" x2="120" y2="380" stroke="#ffffff" strokeWidth="9" />
              <line x1="320" y1="0" x2="120" y2="380" stroke="#ffe39f" strokeWidth="6" />
              <text x="260" y="190" fill="#666666" fontSize="8" transform="rotate(58, 260, 190)">Broadway</text>

              {/* 6th Ave (Avenue of the Americas) */}
              <line x1="190" y1="0" x2="150" y2="380" stroke="#ffffff" strokeWidth="8" />
              <line x1="190" y1="0" x2="150" y2="380" stroke="#ffebb3" strokeWidth="5" />
              <text x="210" y="120" fill="#777777" fontSize="8" transform="rotate(78, 210, 120)">6th Ave</text>

              {/* 7th Ave */}
              <line x1="150" y1="0" x2="110" y2="380" stroke="#ffffff" strokeWidth="8" />
              <line x1="150" y1="0" x2="110" y2="380" stroke="#ffebb3" strokeWidth="5" />
              <text x="170" y="260" fill="#777777" fontSize="8" transform="rotate(78, 170, 260)">7th Ave</text>

              {/* 9th Ave */}
              <line x1="90" y1="0" x2="50" y2="380" stroke="#ffffff" strokeWidth="7" />
              <line x1="90" y1="0" x2="50" y2="380" stroke="#ffebb3" strokeWidth="4" />
              <text x="80" y="220" fill="#888888" fontSize="8" transform="rotate(78, 80, 220)">9th Ave</text>

              {/* Cross Streets (East-West Grid lines) */}
              <line x1="0" y1="60" x2="540" y2="105" stroke="#ffffff" strokeWidth="5" />
              <text x="440" y="95" fill="#888888" fontSize="7" transform="rotate(5, 440, 95)">E 46th St</text>

              <line x1="0" y1="100" x2="540" y2="145" stroke="#ffffff" strokeWidth="5" />
              <line x1="0" y1="140" x2="540" y2="185" stroke="#ffffff" strokeWidth="7" />
              <line x1="0" y1="140" x2="540" y2="185" stroke="#ffebb3" strokeWidth="4" />
              <text x="410" y="172" fill="#777777" fontSize="8" transform="rotate(5, 410, 172)">E 42nd St</text>

              <line x1="0" y1="180" x2="540" y2="225" stroke="#ffffff" strokeWidth="5" />
              <text x="390" y="215" fill="#888888" fontSize="7" transform="rotate(5, 390, 215)">E 36th St</text>

              {/* 34th St (Main Cross Street) */}
              <line x1="0" y1="210" x2="540" y2="255" stroke="#ffffff" strokeWidth="9" />
              <line x1="0" y1="210" x2="540" y2="255" stroke="#ffe39f" strokeWidth="5" />
              <text x="380" y="248" fill="#555555" fontSize="8" fontWeight="600" transform="rotate(5, 380, 248)">
                E 34th St
              </text>

              <line x1="0" y1="250" x2="540" y2="295" stroke="#ffffff" strokeWidth="5" />
              <text x="380" y="285" fill="#888888" fontSize="7" transform="rotate(5, 380, 285)">E 28th St</text>

              <line x1="0" y1="285" x2="540" y2="330" stroke="#ffffff" strokeWidth="6" />
              <text x="370" y="320" fill="#888888" fontSize="8" transform="rotate(5, 370, 320)">E 23rd St</text>

              {/* Neighborhood & POI labels */}
              <text x="70" y="275" fill="#888888" fontSize="10" fontWeight="600" letterSpacing="1">
                CHELSEA
              </text>

              {/* Macy's POI */}
              <circle cx="215" cy="218" r="4" fill="#1a73e8" />
              <text x="223" y="221" fill="#1a73e8" fontSize="8" fontWeight="600">
                Macy&apos;s
              </text>

              {/* Flatiron Building POI */}
              <circle cx="270" cy="318" r="4" fill="#8e24aa" />
              <text x="278" y="321" fill="#8e24aa" fontSize="8" fontWeight="600">
                Flatiron Building
              </text>

              {/* Waldorf Astoria */}
              <circle cx="340" cy="135" r="4" fill="#d81b60" />
              <text x="348" y="138" fill="#d81b60" fontSize="8" fontWeight="600">
                Waldorf Astoria
              </text>

              {/* St. Patrick&apos;s Cathedral */}
              <circle cx="380" cy="115" r="4" fill="#1e88e5" />
              <text x="388" y="118" fill="#1e88e5" fontSize="8" fontWeight="600">
                St. Patrick&apos;s
              </text>

              {/* Subway blue dots */}
              <circle cx="305" cy="190" r="3" fill="#1976d2" />
              <circle cx="280" cy="225" r="3" fill="#1976d2" />
              <circle cx="250" cy="265" r="3" fill="#1976d2" />
              <circle cx="195" cy="285" r="3" fill="#1976d2" />

              {/* Red Map Pin at Empire State Building */}
              <g transform="translate(305, 205)">
                {/* Pin shadow */}
                <ellipse cx="0" cy="12" rx="5" ry="2" fill="rgba(0,0,0,0.3)" />
                {/* Pin shape */}
                <path
                  d="M 0 12 C -6 4, -9 -1, -9 -6 C -9 -11, -5 -15, 0 -15 C 5 -15, 9 -11, 9 -6 C 9 -1, 6 4, 0 12 Z"
                  fill="#ea4335"
                />
                <circle cx="0" cy="-6" r="3.5" fill="#b31412" />
                {/* Label beside pin */}
                <text x="13" y="-2" fill="#cc3d2b" fontSize="9" fontWeight="700">
                  Empire State Building
                </text>
              </g>
            </svg>

            {/* Top-Left Info Popover Card matching screenshot */}
            <div className="map-info-popover">
              <div className="map-place-title">Empire State Building</div>
              <div className="map-place-address">20 W 34th St., New York, NY 10001</div>
              <div className="map-rating-row">
                <span className="font-semibold text-gray-900">4.7</span>
                <span className="map-rating-star">★</span>
                <span className="text-blue-600 underline cursor-pointer">(130,805)</span>
                <span className="text-gray-400 text-[10px] ml-0.5">ⓘ</span>
              </div>
              <a
                href="https://maps.google.com/?q=Empire+State+Building"
                target="_blank"
                rel="noreferrer"
                className="btn-open-maps"
                aria-label="Open location in Google Maps"
              >
                <ExternalLink className="w-3 h-3 stroke-[2.5]" />
                <span>Open in Maps</span>
              </a>
            </div>

            {/* Bottom-left map thumbnail preview */}
            <div className="map-layer-thumbnail" title="Map Layers">
              <div className="map-thumbnail-inner" />
            </div>

            {/* Bottom-right expand button */}
            <button
              type="button"
              className="map-fullscreen-btn"
              aria-label="Toggle Fullscreen Map View"
              onClick={() => window.open('https://maps.google.com/?q=Empire+State+Building', '_blank')}
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>

            {/* Bottom Google attribution */}
            <div className="map-bottom-bar">
              <div className="google-wordmark">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </div>
              <div className="map-legal-text">
                <span>Keyboard shortcuts</span>
                <span>•</span>
                <span>Map data ©2026 Google</span>
                <span>•</span>
                <span>Terms</span>
                <span>•</span>
                <span>Report a map error</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
