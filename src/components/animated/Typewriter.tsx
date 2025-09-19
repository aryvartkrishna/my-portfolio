"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  texts: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
}

export function Typewriter({ 
  texts, 
  className = "", 
  speed = 100, 
  deleteSpeed = 50, 
  delay = 2000 
}: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        
        if (currentText === currentFullText) {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, delay]);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <motion.span
        className="inline-block w-1 h-8 bg-white ml-1 align-middle"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </motion.div>
  );
}