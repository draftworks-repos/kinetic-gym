"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import "./Testimonials.css";

const TESTIMONIALS_DATA = [
  {
    name: "Liam Henderson",
    quote:
      "The 6:00 AM HIIT & Combat session sets the tone for my whole work day. World-class energy, high-end equipment, and coaches that know you by first name from day one.",
  },
  {
    name: "Emily H.",
    quote:
      "The culture here is electric. It isn’t like commercial gyms where you walk around waiting for equipment. Every piece is calibrated, and the trainers actively refine your technique. Dropped 20 lbs in three months!",
  },
  {
    name: "Alexandra T.",
    quote:
      "The infrared sauna and cold plunge after a brutal powerlifting session is a total game changer. I used to be chronically sore; now I train 5 days a week without joint pain. Exceptional facility.",
  },
  {
    name: "Liam Henderson",
    quote:
      "The 6:00 AM HIIT & Combat session sets the tone for my whole work day. World-class energy, high-end equipment, and coaches that know you by first name from day one.",
  },
  {
    name: "Alexandra T.",
    quote:
      "The infrared sauna and cold plunge after a brutal powerlifting session is a total game changer. I used to be chronically sore; now I train 5 days a week without joint pain. Exceptional facility.",
  },
];

function GoogleColorIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google verified reviewer"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function Testimonials() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [requestedIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 767) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1023) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS_DATA.length - visibleCards);
  const currentIndex = Math.min(requestedIndex, maxIndex);

  const goNext = () => {
    setCurrentIndex((index) => {
      const boundedIndex = Math.min(index, maxIndex);
      return boundedIndex >= maxIndex ? 0 : boundedIndex + 1;
    });
  };

  const goPrev = () => {
    setCurrentIndex((index) => {
      const boundedIndex = Math.min(index, maxIndex);
      return boundedIndex <= 0 ? maxIndex : boundedIndex - 1;
    });
  };

  return (
    <section className="testimonials-section" aria-label="Member Testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="section-label">TESTIMONIALS</span>
          <h2 className="testimonials-headline">WHAT OUR MEMBERS SAY</h2>

          <div className="testimonials-rating-bar">
            <div className="stars-row" aria-label="5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="rating-star" aria-hidden="true" />
              ))}
            </div>
            <span className="review-source">
              4.9 Star Average Across Google Reviews
            </span>
          </div>
        </div>

        <div className="testimonials-viewport">
          <div
            className="testimonials-track"
            style={
              {
                "--visible-cards": visibleCards,
                transform: `translateX(calc(-${currentIndex} * ((100% + var(--testimonial-gap)) / ${visibleCards})))`,
              } as React.CSSProperties & {
                "--visible-cards": number;
              }
            }
          >
            {TESTIMONIALS_DATA.map((t, idx) => (
              <article key={idx} className="testimonial-card">
                <div
                  className="testimonial-stars"
                  aria-label="5 out of 5 stars"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="rating-star" aria-hidden="true" />
                  ))}
                </div>

                <blockquote className="testimonial-quote">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="testimonial-divider" />

                <div className="testimonial-author-row">
                  <div className="google-icon-box">
                    <GoogleColorIcon />
                  </div>
                  <span className="author-name">{t.name}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="testimonials-footer">
          <span className="testimonial-count">
            {String(
              Math.min(currentIndex + visibleCards, TESTIMONIALS_DATA.length),
            ).padStart(2, "0")}
            {" / "}
            {String(TESTIMONIALS_DATA.length).padStart(2, "0")}
          </span>

          <div className="testimonial-arrow-navigation">
            <button
              type="button"
              className="testimonial-nav-btn"
              onClick={goPrev}
              aria-label="Previous testimonials"
              disabled={TESTIMONIALS_DATA.length <= visibleCards}
            >
              <ChevronLeft aria-hidden="true" />
            </button>

            <button
              type="button"
              className="testimonial-nav-btn"
              onClick={goNext}
              aria-label="Next testimonials"
              disabled={TESTIMONIALS_DATA.length <= visibleCards}
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
