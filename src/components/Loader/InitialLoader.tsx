"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import "./InitialLoader.css";

const PHRASES = ["NAMASTE", "WELCOME", "TO", "DRAFTWORKS"];
const LOADER_SESSION_KEY = "kinetic-gym-initial-loader-shown";
const loaderSubscribers = new Set<() => void>();

function subscribeToLoader(callback: () => void) {
  loaderSubscribers.add(callback);
  return () => loaderSubscribers.delete(callback);
}

function hasLoaderCompleted() {
  return sessionStorage.getItem(LOADER_SESSION_KEY) === "true";
}

interface InitialLoaderProps {
  onComplete?: () => void;
}

export default function InitialLoader({ onComplete }: InitialLoaderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const isDone = useSyncExternalStore(
    subscribeToLoader,
    hasLoaderCompleted,
    () => false,
  );

  useEffect(() => {
    if (isDone) return;

    const originalOverflow = document.body.style.overflow;

    const phraseTimer = window.setInterval(() => {
      setCurrentIndex((previous) => {
        if (previous >= PHRASES.length - 1) {
          window.clearInterval(phraseTimer);
          return previous;
        }

        return previous + 1;
      });
    }, 750);

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, 2800);

    const completeTimer = window.setTimeout(() => {
      sessionStorage.setItem(LOADER_SESSION_KEY, "true");
      loaderSubscribers.forEach((subscriber) => subscriber());
      onComplete?.();
    }, 3400);

    return () => {
      window.clearInterval(phraseTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, [isDone, onComplete]);

  if (isDone) return null;

  return (
    <div
      className={`initial-loader${isExiting ? " initial-loader--exit" : ""}`}
      role="status"
      aria-label="Namaste. Welcome to Draftworks."
      aria-live="polite"
    >
      <div className="initial-loader__text-wrap">
        <h1 key={PHRASES[currentIndex]} className="initial-loader__text">
          <span
            className={
              currentIndex === PHRASES.length - 1
                ? "loader-word accent"
                : "loader-word"
            }
          >
            {PHRASES[currentIndex]}
          </span>
        </h1>
      </div>
    </div>
  );
}
