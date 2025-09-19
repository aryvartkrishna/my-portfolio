"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBox({ 
  value, 
  onChange, 
  placeholder = "Search...", 
  className = "" 
}: SearchBoxProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative"
        animate={{ 
          scale: isFocused ? 1.02 : 1,
          boxShadow: isFocused 
            ? "0 0 0 3px rgba(139, 92, 246, 0.3)" 
            : "0 0 0 0 rgba(139, 92, 246, 0)"
        }}
        transition={{ duration: 0.2 }}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full px-4 py-3 pl-12 pr-12 rounded-full glass text-white placeholder-white/60 focus:outline-none focus:border-purple-500/50 transition-all duration-300"
        />
        
        {/* Search Icon */}
        <motion.div
          className="absolute left-4 top-1/2 transform -translate-y-1/2"
          animate={{ 
            scale: isFocused ? 1.1 : 1,
            color: isFocused ? "#8B5CF6" : "#9CA3AF"
          }}
          transition={{ duration: 0.2 }}
        >
          <Search className="w-5 h-5" />
        </motion.div>
        
        {/* Clear Button */}
        {value && (
          <motion.button
            onClick={() => onChange("")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-4 h-4" />
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
}