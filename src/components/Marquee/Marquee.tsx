'use client';

import React from 'react';
import { useCssAnimationObserver } from '@/hooks/use-css-animation-observer';
import './Marquee.css';

const MARQUEE_ITEMS = [
  'PERSONAL TRAINING',
  'HIGH INTENSITY INTERVAL',
  'STRENGTH & CONDITIONING',
  'OLYMPIC WEIGHTLIFTING',
  'YOGA & RECOVERY',
  'ATHLETIC BIOMECHANICS',
  'METABOLIC CONDITIONING',
  'HYDRO-CRYOTHERAPY',
];

export default function Marquee() {
  const { elementRef, isInViewport } = useCssAnimationObserver<HTMLDivElement>();

  return (
    <section
      ref={elementRef}
      className="marquee-section"
      aria-label="Athletic Disciplines Marquee"
    >
      <div className="marquee-wrapper">
        <div
          className={`marquee-track ${
            isInViewport ? 'animation-running' : 'animation-paused'
          }`}
        >
          {/* Repeat twice for seamless infinite looping */}
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span key={idx} className="marquee-item">
              <span className="marquee-bullet diamond" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
