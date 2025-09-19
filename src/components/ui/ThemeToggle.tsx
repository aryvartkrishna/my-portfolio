"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full glass hover:bg-white/10 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="relative w-6 h-6"
        initial={false}
        animate={{ rotate: theme === "light" ? 0 : 180 }}
        transition={{ duration: 0.5 }}
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5 text-white" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-400" />
        )}
      </motion.div>
    </motion.button>
  );
}