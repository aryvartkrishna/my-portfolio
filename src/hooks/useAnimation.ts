"use client";

import { useState, useEffect } from "react";

export function useAnimation() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const stagger = (index: number, baseDelay = 0.1) => {
    return baseDelay * index;
  };

  const sequence = (animations: (() => void)[], delay = 300) => {
    animations.forEach((animation, index) => {
      setTimeout(animation, index * delay);
    });
  };

  return {
    isMounted,
    stagger,
    sequence,
  };
}