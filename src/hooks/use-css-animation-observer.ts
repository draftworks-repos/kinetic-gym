'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that uses IntersectionObserver to detect when an animated element
 * enters or leaves the viewport, allowing CSS animations to be paused when not visible
 * to conserve GPU/CPU resources and ensure optimal performance.
 */
export function useCssAnimationObserver<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const elementRef = useRef<T | null>(null);
  const [isInViewport, setIsInViewport] = useState(true);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsInViewport(entry.isIntersecting);
    }, {
      threshold: options?.threshold ?? 0.1,
      rootMargin: options?.rootMargin ?? '50px',
      ...options,
    });

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { elementRef, isInViewport };
}
