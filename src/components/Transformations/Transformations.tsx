'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from "next/image";
import { ChevronsLeftRight } from 'lucide-react';
import './Transformations.css';

interface TransformationItem {
  id: string;
  name: string;
  duration: string;
  metric: string;
  beforeImg: string;
  afterImg: string;
  program: string;
}

const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: 't1',
    name: 'Marcus K. — Power Athlete',
    duration: '14 Weeks Periodization',
    metric: '-18 lbs Fat / +7 lbs Lean Mass',
    beforeImg: '/assets/aistudio/before-1.webp',
    afterImg: '/assets/aistudio/after-1.webp',
    program: 'Strength & Hypertrophy',
  },
  {
    id: 't2',
    name: 'Sophia M. — Hybrid Conditioning',
    duration: '12 Weeks Protocol',
    metric: '-12% Body Fat / +40% VO2 Max',
    beforeImg:  '/assets/aistudio/before-2.webp',
    afterImg: '/assets/aistudio/after-2.webp',
    program: 'HIIT & Functional Engine',
  },
  {
    id: 't3',
    name: 'David L. — Olympic Rebuild',
    duration: '16 Weeks 1-on-1',
    metric: '+95 lbs Squat / Posture Restored',
    beforeImg:  '/assets/aistudio/before-3.webp',
    afterImg:'/assets/aistudio/after-3.webp',
    program: '1-on-1 Biomechanical',
  },
];

function CompareSlider({ item }: { item: TransformationItem }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(rect.width, x));
    const percentage = (clamped / rect.width) * 100;
    setPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    isDragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div id="transformation" className="compare-card">
      <div
        ref={containerRef}
        className="compare-stage"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onDragStart={(e) => e.preventDefault()}
        role="slider"
        aria-label={`Comparison slider for ${item.name}`}
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
      >
        {/* AFTER Image (Full background) */}
        <Image
          src={item.afterImg}
          alt={`${item.name} after athletic coaching`}
          width={700}
          height={420}
          unoptimized
          className="compare-image-full"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
        />

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="compare-clip-container"
          style={{ width: `${position}%` }}
        >
          <Image
            src={item.beforeImg}
            alt={`${item.name} before athletic coaching`}
            width={700}
            height={420}
            unoptimized
            className="compare-image-clipped"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            style={{
              width: `${(100 / Math.max(position, 0.001)) * 100}%`,
              maxWidth: 'none',
            }}
          />
        </div>

        {/* Capsule Labels with opaque white background and dark text */}
        <span className="badge-before">BEFORE</span>
        <span className="badge-after">AFTER</span>

        {/* Slider Handle Divider */}
        <div
          className="compare-divider-line"
          style={{ left: `${position}%` }}
        >
          <div className="compare-handle-knob">
            <ChevronsLeftRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Transformations() {
  return (
    <section id="gallery" className="transformations-section" aria-label="Athlete Transformations">
      <div className="transformations-container">
        <div className="transformations-header">
          <span className="section-label">ATHLETE CASE STUDIES</span>
          <h2 className="transformations-headline">REAL PEOPLE. REAL TRANSFORMATIONS.</h2>
          <p className="transformations-subhead">
            Witness what consistency, periodized coaching, and elite facility access achieve
            in 12 to 16 weeks. Drag or interact to compare results.
          </p>
        </div>

        <div className="transformations-grid">
          {TRANSFORMATIONS.map((item) => (
            <CompareSlider key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
