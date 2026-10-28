"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./Programs.css";

const PROGRAMS_DATA = [
  {
    id: "strength",
    tag: "STRENGTH",
    title: "STRENGTH & HYPERTROPHY",
    desc: "Custom powerlifting, periodized hypertrophy, and progressive overload protocols designed for raw physical dominance.",
    duration: "60 MIN SESSIONS",
    image:
      "https://images.pexels.com/photos/31783554/pexels-photo-31783554.jpeg",
  },
  {
    id: "conditioning",
    tag: "CONDITIONING",
    title: "HIIT & FUNCTIONAL",
    desc: "Rapid metabolic conditioning circuits using ski-ergs, assault bikes, kettlebells, and plyometrics for unyielding stamina.",
    duration: "45 MIN SESSIONS",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBE8ENveqDialEBwPusqZ6X1lC8gGgOLRu3tWwsHz9z8b99ZO3DNv6RTXW9-enGm_SuvnV76zFlalA8XD6LoEObj4DLQgqObXUUY0T107Eqmbmk323lpMYgdWzBBbRHr1QQlkhHRGem9UI_ZkCmjZ0aGZCvpQLUws5c2riVgGmglmMNtMk21gLL5EBeIOwtC9EyjW7hVkyS9OWo9DzVAMt4SZ2kHy1GoEvWe_D_7-VhsnMniI4WY-Du5w",
  },
  {
    id: "coaching",
    tag: "PRIVATE 1-ON-1",
    title: "1-ON-1 PERSONAL COACHING",
    desc: "Dedicated biometric telemetry, bespoke weekly programming, nutrition architecture, and private coaching pods.",
    duration: "BESPOKE PROTOCOL",
    image:
      "https://images.pexels.com/photos/33846716/pexels-photo-33846716.jpeg",
  },
  {
    id: "mobility",
    tag: "RESTORATION",
    title: "ATHLETIC MOBILITY & RECOVERY",
    desc: "Joint decompression, neuromuscular fascial release, and kinetic movement patterns to safeguard against injury.",
    duration: "50 MIN SESSIONS",
    image:
      "https://images.pexels.com/photos/4804312/pexels-photo-4804312.jpeg",
  },
];

export default function Programs() {
  const [startIndex, setStartIndex] = useState(0);
  const [maxVisible, setMaxVisible] = useState(3);

  useEffect(() => {
    const mqTablet = window.matchMedia(
      "(min-width: 768px) and (max-width: 1023px)",
    );
    const mqMobile = window.matchMedia("(max-width: 767px)");

    const handleChange = () => {
      if (mqMobile.matches) {
        setMaxVisible(1);
      } else if (mqTablet.matches) {
        setMaxVisible(2);
      } else {
        setMaxVisible(3);
      }
      setStartIndex(0);
    };

    handleChange();
    mqTablet.addEventListener("change", handleChange);
    mqMobile.addEventListener("change", handleChange);
    return () => {
      mqTablet.removeEventListener("change", handleChange);
      mqMobile.removeEventListener("change", handleChange);
    };
  }, []);

  const canGoNext = startIndex + maxVisible < PROGRAMS_DATA.length;
  const canGoPrev = startIndex > 0;

  const handleNext = () => {
    if (canGoNext) setStartIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (canGoPrev) setStartIndex((prev) => prev - 1);
  };

  const visiblePrograms = PROGRAMS_DATA.slice(
    startIndex,
    startIndex + maxVisible,
  );

  return (
    <section
      id="services"
      className="programs-section"
      aria-label="Our Training Programs"
    >
      <div className="programs-container">
        <div className="programs-header-row">
          <div className="programs-headline-wrap">
            <span className="section-label">OUR PROGRAMS</span>
            <h2 className="programs-headline">WORLD-CLASS TRAINING PROGRAMS</h2>
          </div>

          <div className="programs-nav-controls">
            <button
              type="button"
              className="nav-arrow-btn"
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="Previous Programs"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="nav-arrow-btn"
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="Next Programs"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="programs-grid">
          {visiblePrograms.map((program) => (
            <article key={program.id} className="program-card">
              <div className="program-card-image-wrap">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  unoptimized
                  className="program-image"
                />
                <span className="program-tag-badge">{program.tag}</span>
              </div>

              <div className="program-body">
                <h3 className="program-title">{program.title}</h3>
                <p className="program-desc">{program.desc}</p>

                <div className="program-footer-bar">
                  <span className="program-duration-label">
                    {program.duration}
                  </span>
                  <a
                    href="tel:+18005554696"
                    className="program-action-circle"
                    aria-label={`Call to enroll in ${program.title}`}
                  >
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile-only navigation below card */}
        <div className="programs-nav-controls-mobile">
          <button
            type="button"
            className="nav-arrow-btn"
            onClick={handlePrev}
            disabled={!canGoPrev}
            aria-label="Previous Programs"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="programs-mobile-indicator">
            {startIndex + 1} / {PROGRAMS_DATA.length}
          </span>
          <button
            type="button"
            className="nav-arrow-btn"
            onClick={handleNext}
            disabled={!canGoNext}
            aria-label="Next Programs"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
