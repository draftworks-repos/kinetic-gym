'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, RotateCcw, X } from 'lucide-react';
import './FacilityStats.css';

const STATS_DATA = [
  {
    number: '12+',
    title: 'YEARS OF EXCELLENCE',
    desc: 'Founded in 2013 with uncompromising standards.',
  },
  {
    number: '98%',
    title: 'GOAL SUCCESS RATE',
    desc: 'Members reaching target milestones in 90 days.',
  },
  {
    number: '40+',
    title: 'WEEKLY CLASSES',
    desc: 'From dawn conditioning to restorative mobility.',
  },
  {
    number: '100%',
    title: 'CLEAN AIR & SANITIZED',
    desc: 'Hospital-grade HEPA filtration system.',
  },
];

function StatCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const number = Number.parseInt(value, 10);
  const suffix = value.slice(String(number).length);
  const numberRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = numberRef.current;
    if (!element) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      const frameId = window.requestAnimationFrame(() => setCount(number));
      return () => window.cancelAnimationFrame(frameId);
    }

    let frameId = 0;
    let startedAt: number | null = null;
    const duration = 2500;

    const animate = (timestamp: number) => {
      if (startedAt === null) startedAt = timestamp;

      const progress = Math.min((timestamp - startedAt) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 4;
      setCount(Math.round(number * easedProgress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    if (typeof window.IntersectionObserver === 'undefined') {
      frameId = window.requestAnimationFrame(animate);
      return () => window.cancelAnimationFrame(frameId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          frameId = window.requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, [number]);

  return (
    <span ref={numberRef} className="stat-number" aria-label={value}>
      {count}{suffix}
    </span>
  );
}

export default function FacilityStats() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleStartTour = () => {
    setIsPlaying(true);
    setIsPaused(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleRestartVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
    setIsPaused(false);
  };

  const handleCloseVideo = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    if (total > 0) {
      setProgress((current / total) * 100);
    }
  };

  return (
    <section id="about" className="facility-section" aria-label="About Our Facility">
      <div className="facility-container">
        {/* Header Row */}
        <div className="facility-header-row">
          <div className="facility-header-left">
            <span className="section-label">ABOUT OUR FACILITY</span>
            <h2 className="facility-headline">
              ENGINEERED FOR RESULTS, <br />
              BUILT FOR EVERY LEVEL
            </h2>
          </div>

          <div className="facility-desc-col">
            <p className="facility-desc-text">
              We combine biometric data telemetry, Olympic-grade power systems,
              and high-intensity sports science to give our athletes a decisive
              physical edge.
            </p>
          </div>
        </div>

        {/* Video Tour Banner Card - Plays Right In This Block */}
        <div
          className={`tour-video-card ${isPlaying ? 'is-playing' : ''}`}
          aria-label="Facility Tour Video Player Block"
        >
          {/* Always mounted video element avoids flash of background poster */}
          <video
            ref={videoRef}
            src="https://www.pexels.com/download/video/32239229/"
            className="inblock-video-element"
            playsInline
            muted={isMuted}
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => handleCloseVideo()}
            style={{
              display: isPlaying ? 'block' : 'none',
              backgroundColor: '#0a0d14',
            }}
          />

          {isPlaying ? (
            <div className="inblock-video-hud">
              <div className="inblock-hud-top">
                <div />
                <button
                  type="button"
                  className="inblock-btn-close"
                  onClick={handleCloseVideo}
                  aria-label="Close video player"
                >
                  <X className="w-4 h-4 text-white" />
                  <span>CLOSE</span>
                </button>
              </div>

              <div className="inblock-hud-bottom">
                <div
                  className="inblock-timeline-bar"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!videoRef.current) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickPos = (e.clientX - rect.left) / rect.width;
                    videoRef.current.currentTime = clickPos * videoRef.current.duration;
                  }}
                >
                  <div
                    className="inblock-timeline-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="inblock-controls-row">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="inblock-btn-icon"
                      onClick={handleTogglePlay}
                      aria-label={isPaused ? 'Play facility tour' : 'Pause facility tour'}
                    >
                      {isPaused ? (
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      ) : (
                        <Pause className="w-5 h-5 text-white" />
                      )}
                    </button>

                    <button
                      type="button"
                      className="inblock-btn-icon"
                      onClick={handleToggleMute}
                      aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                      )}
                    </button>

                    <button
                      type="button"
                      className="inblock-btn-icon"
                      onClick={handleRestartVideo}
                      aria-label="Restart facility video"
                    >
                      <RotateCcw className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  <div className="text-xs font-bold text-white tracking-wider uppercase hidden sm:block">
                    KINETIC OLYMPIC FACILITY & SPA
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Image
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop"
                alt="Olympic weightlifting and athletic conditioning zone at Kinetic Gym"
                fill
                sizes="(min-width: 1280px) 1280px, 100vw"
                unoptimized
                className="tour-image"
              />
              <div
                className="tour-overlay"
                onClick={handleStartTour}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleStartTour();
                  }
                }}
                aria-label="Play Facility Tour Video Directly In This Block"
              >
                <div className="tour-play-button">
                  <Play className="w-8 h-8 fill-current stroke-none ml-1 text-white" />
                </div>
                <div className="tour-play-label">WATCH FACILITY TOUR • 2 MIN</div>
              </div>
            </>
          )}
        </div>

        {/* 4 Stats Grid */}
        <div className="stats-grid">
          {STATS_DATA.map((item, idx) => (
            <div key={idx} className="stat-card">
              <StatCounter value={item.number} />
              <h3 className="stat-title">{item.title}</h3>
              <p className="stat-description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
