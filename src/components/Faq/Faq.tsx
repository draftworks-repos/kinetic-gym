"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./Faq.css";

const FAQ_ITEMS = [
  {
    q: "WHAT IS INCLUDED IN THE 3 DAYS FREE TRIAL?",
    a: "Your 3 Days Free Trial provides unrestricted access to our 25,000 sq ft facility, including all strength and cardio floors, access to one group class of your choice (Combat, HIIT, or Mobility), and a complimentary 20-minute InBody segmental biometric body composition scan.",
  },
  {
    q: "DO I HAVE TO SIGN A LONG-TERM CONTRACT?",
    a: "Never. All memberships operate on transparent 30-day recurring cycles. You can freeze your account for up to 60 days per year, upgrade or adjust your membership, or cancel with 7 days notice before your billing cycle.",
  },
  {
    q: "ARE PERSONAL TRAINING SESSIONS INCLUDED IN THE MEMBERSHIP?",
    a: "Every new athlete receives an initial Biomechanical Movement Screen and nutrition calibration consult. Ongoing 1-on-1 personal coaching protocols can be customized weekly or booked ad-hoc with your designated coach.",
  },
  {
    q: "WHAT ARE YOUR PEAK AND OFF-PEAK OPERATING HOURS?",
    a: "We are open Monday through Friday from 5:00 AM to 11:00 PM, and Saturday & Sunday from 7:00 AM to 9:00 PM. Peak training hours are typically 6:30 AM - 8:30 AM and 5:00 PM - 7:30 PM.",
  },
  {
    q: "IS THERE PARKING AND LUXURY LOCKER ROOM AMENITIES AVAILABLE?",
    a: "Yes. We offer complimentary subterranean validated member parking, executive private locker suites equipped with rain showers, Malin+Goetz grooming essentials, Dyson Supersonic hair styling stations, and chilled eucalyptus towel service.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="faq-section"
      aria-label="Frequently Asked Questions"
    >
      <div className="faq-container">
        <div className="faq-header">
          <span className="section-label">CLEAR ANSWERS</span>
          <h2 className="faq-headline">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="faq-subhead">
            Everything you need to know about joining Kinetic Gym.
          </p>
        </div>

        <div className="faq-accordion-list">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-accordion-item ${isOpen ? "is-open" : ""}`}
                data-open={isOpen ? "true" : "false"}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span>{item.q}</span>
                  <span className="faq-chevron-wrap">
                    <ChevronDown className="faq-chevron-icon" />
                  </span>
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  className="faq-answer-pane"
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                >
                  <div className="faq-answer-content">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
