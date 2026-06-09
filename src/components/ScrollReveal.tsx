'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    // If user prefers reduced motion, do not apply animations
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const revealElements = document.querySelectorAll('section');

    // Initialize elements by adding the ready class
    revealElements.forEach((el) => {
      el.classList.add('reveal-ready');
    });

    const observerOptions = {
      root: null, // use viewport
      rootMargin: '0px 0px -80px 0px', // trigger slightly before entering fully
      threshold: 0.1, // trigger when 10% is visible
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          obs.unobserve(entry.target); // only reveal once
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
