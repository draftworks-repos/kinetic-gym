'use client';

import React from 'react';
import { ArrowRight, Award, ShieldCheck, Sliders, Sparkles, CheckCircle2, Zap } from 'lucide-react';
import './WhyUs.css';

const WHY_CARDS = [
  {
    icon: Sliders,
    question: 'HOW DOES BIOMETRIC TRACKING PERSONALIZE MY PLAN?',
    answer:
      'Every athlete receives monthly medical-grade InBody body composition analysis and neuromuscular bar velocity readings that immediately alter your sets, reps, and dietary targets.',
    tag: 'BIOMETRIC TELEMETRY • PRECISION PROTOCOLS',
  },
  {
    icon: Award,
    question: 'WHAT CREDENTIALS AND STANDARDS DO COACHES FOLLOW?',
    answer:
      'Every coach holds accredited CSCS, NASM Master, USAW, or Division 1 collegiate coaching experience. No weekend certificate instructors—only elite biomechanists.',
    tag: 'CSCS / USAW CERTIFIED • HIGH PERFORMANCE',
  },
  {
    icon: ShieldCheck,
    question: 'ARE THERE REALLY ZERO LOCK-IN CONTRACTS OR EXIT FEES?',
    answer:
      'Yes. Total freedom. All memberships are simple 30-day recurring cycles. You can freeze, adjust, or cancel anytime with just 7 days notice before your next invoice.',
    tag: 'NO INITIATION FEES • 100% AUTONOMY',
  },
  {
    icon: Sparkles,
    question: 'WHAT RECOVERY AMENITIES ARE INCLUDED WITH MEMBERSHIP?',
    answer:
      'Full access to sub-45°F cold plunge pools, Finnish infrared saunas, Hyperice percussion massage therapy stations, and NormaTec compression recovery boots.',
    tag: 'THERMAL SPA • HYDRO-CRYOTHERAPY',
  },
];

export default function WhyUs() {
  return (
    <section className="why-us-section" aria-label="Why Athletes Choose Us">
      <div className="why-us-container">
        <div className="why-us-layout">
          {/* Left Solid Orange Card matching why_us_212ae31e.png */}
          <div className="why-hero-card">
            <div className="why-hero-top">
              <h2 className="why-hero-title">
                WHY <br />
                ATHLETES <br />
                CHOOSE US
              </h2>

              <p className="why-hero-desc">
                We don&apos;t operate as an ordinary gym. We are an integrated physical
                conditioning ecosystem engineered to eliminate plateaus, elevate VO2 max, and
                build lifelong durability.
              </p>
            </div>

            {/* Bottom Group: Divider line + 2 feature items + Button */}
            <div className="why-hero-bottom-group">
              <div className="why-hero-divider" />

              <div className="why-hero-features">
                <div className="why-feature-row">
                  <CheckCircle2 className="why-feature-icon" />
                  <span>GUARANTEED PROGRESSION</span>
                </div>
                <div className="why-feature-row">
                  <Zap className="why-feature-icon fill-current stroke-none" />
                  <span>CONTINUOUS TELEMETRY</span>
                </div>
              </div>

              <a
                href="tel:+18005554696"
                className="btn-why-trial"
                aria-label="Call directly to start 3-day trial"
              >
                <span>START 3-DAY TRIAL</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Right 2x2 Grid */}
          <div className="why-cards-grid">
            {WHY_CARDS.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div key={idx} className="why-item-card">
                  <div className="why-item-icon-box">
                    <IconComp className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="why-item-question">{card.question}</h3>
                  <p className="why-item-answer">{card.answer}</p>
                  <span className="why-item-tag">{card.tag}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
