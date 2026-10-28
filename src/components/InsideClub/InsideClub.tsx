"use client";

import React from "react";
import Image from "next/image";
import "./InsideClub.css";

const BENTO_ZONES = [
  {
    id: "z1",
    zone: "ZONE 01",
    title: "OLYMPIC FREE WEIGHTS & POWERLIFTING LAB",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    className: "bento-card-main",
  },
  {
    id: "z2",
    zone: "ZONE 02",
    title: "THERMAL SPA & COLD PLUNGE",
    img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop",
    className: "bento-card-top-right",
  },
  {
    id: "z3",
    zone: "ZONE 03",
    title: "HIGH-PERFORMANCE CARDIO MEZZANINE",
    img: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800&auto=format&fit=crop",
    className: "bento-card-mid-right",
  },
  {
    id: "z4",
    zone: "ZONE 04",
    title: "EXECUTIVE LOCKER SUITES",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    className: "bento-card-bottom-left",
  },
  {
    id: "z5",
    zone: "ZONE 05",
    title: "50M SPRINT TURF & COMBAT CAGE",
    img: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1000&auto=format&fit=crop",
    className: "bento-card-bottom-right",
  },
];

export default function InsideClub() {
  return (
    <section
      id="gallery"
      className="inside-club-section"
      aria-label="Architectural Facility Tour"
    >
      <div className="inside-club-container">
        <div className="inside-club-header-row">
          <div>
            <span className="section-label">ARCHITECTURAL TOUR</span>
            <h2 className="inside-club-headline">INSIDE THE CLUB</h2>
          </div>

          <div className="inside-club-badges">
            <span className="club-spec-badge">25,000 SQ FT FACILITY</span>
            <span className="club-spec-badge">CENTRAL HUB</span>
          </div>
        </div>

        <div className="bento-grid">
          {BENTO_ZONES.map((zone) => (
            <div
              key={zone.id}
              className={`bento-card ${zone.className}`}
              aria-label={zone.title}
            >
              <Image
                src={zone.img}
                alt={zone.title}
                fill
                sizes="(min-width: 1024px) 65vw, (min-width: 768px) 100vw, 100vw"
                unoptimized
                className="bento-card-image"
              />
              <div className="bento-card-overlay">
                {zone.zone && (
                  <span className="bento-zone-tag">{zone.zone}</span>
                )}
                <h3 className="bento-title">{zone.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
