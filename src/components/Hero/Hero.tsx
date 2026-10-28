"use client";

import React from "react";
import Image from "next/image";
import { Zap, Star, Play } from "lucide-react";
import "./Hero.css";

interface HeroProps {
  onExploreClasses: () => void;
}

export default function Hero({ onExploreClasses }: HeroProps) {
  return (
    <section className="hero-section" aria-label="Hero Introduction">
      {/* Background Graphic - Provided by user */}
      <div className="hero-background-wrapper">
        <Image
          src="/assets/aistudio/hero-bg.png"
          alt="Athlete training with dumbbells at Kinetic Gym Apex Performance Gym"
          fill
          sizes="100vw"
          priority
          className="hero-bg-image"
        />
        <div className="hero-vignette-overlay" />
      </div>

      <div className="hero-container">
        <div className="hero-content-col">
          <h1 className="hero-headline">
            UNLEASH YOUR <br />
            <span className="highlight-wrap">
              PEAK POTENTIAL
              <svg
                className="wavy-underline-svg"
                viewBox="0 0 340 16"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 5 Q 9 0, 16 5 T 30 5 T 44 5 T 58 5 T 72 5 T 86 5 T 100 5 T 114 5 T 128 5 T 142 5 T 156 5 T 170 5 T 184 5 T 198 5 T 212 5 T 226 5 T 240 5 T 254 5 T 268 5 T 282 5 T 296 5 T 310 5 T 324 5 T 338 5"
                  stroke="#a63500"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M2 11 Q 9 6, 16 11 T 30 11 T 44 11 T 58 11 T 72 11 T 86 11 T 100 11 T 114 11 T 128 11 T 142 11 T 156 11 T 170 11 T 184 11 T 198 11 T 212 11 T 226 11 T 240 11 T 254 11 T 268 11 T 282 11 T 296 11 T 310 11 T 324 11 T 338 11"
                  stroke="#a63500"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.65"
                />
              </svg>
            </span>{" "}
            TODAY
          </h1>

          <p className="hero-subhead">
            State-of-the-art equipment, elite personal trainers, and high-octane
            metabolic classes engineered to transform your physical conditioning
            and mental toughness.
          </p>

          <div className="hero-actions-row">
            <a
              href="tel:+18005554696"
              className="btn-hero-primary"
              aria-label="Call directly to claim 3 days free trial"
            >
              <span>CLAIM 3 DAYS FREE TRIAL</span>
              <Zap className="w-4 h-4 fill-current stroke-none" />
            </a>

            <button
              type="button"
              className="btn-hero-secondary"
              onClick={onExploreClasses}
              aria-label="Explore Training Classes"
            >
              <span className="play-circle-icon">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </span>
              <span>EXPLORE CLASSES</span>
            </button>
          </div>

          {/* Social Proof */}
          <div className="hero-social-proof">
            <div className="avatar-stack">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
                alt="Member athlete 1"
                width={40}
                height={40}
                unoptimized
                className="avatar-bubble"
              />
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                alt="Member athlete 2"
                width={40}
                height={40}
                unoptimized
                className="avatar-bubble"
              />
              <Image
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=120&auto=format&fit=crop"
                alt="Member athlete 3"
                width={40}
                height={40}
                unoptimized
                className="avatar-bubble"
              />
              <div className="avatar-badge-plus">+2K</div>
            </div>

            <div className="proof-ratings">
              <div className="star-rating-row">
                <div className="stars-list" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current stroke-none"
                    />
                  ))}
                </div>
                <span className="rating-score">4.9 / 5.0</span>
              </div>
              <span className="reviews-subtitle">
                OVER 2,400+ VERIFIED ATHLETE REVIEWS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
