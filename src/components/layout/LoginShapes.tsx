'use client';

import { motion } from 'framer-motion';

export function LoginShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 opacity-90" />

      {/* Floating circles */}
      {/* Main floating circle with rotation and scale */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-blue-100/60 to-blue-200/40 blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          y: [0, 40, 30, 0],
          x: [0, 30, -20, 0],
          rotate: [0, 15, -10, 0],
          scale: [0.8, 1, 0.9, 0.8],
          opacity: [0, 1, 1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
          times: [0, 0.3, 0.7, 1],
        }}
      />

      {/* Secondary circle with different timing */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-primary/15 to-blue-300/10 blur-3xl"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{
          y: [0, -40, 20, 0],
          x: [0, -30, 20, 0],
          rotate: [0, -20, 15, 0],
          scale: [0.7, 1.1, 0.9, 0.7],
          opacity: [0, 1, 1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
          times: [0, 0.4, 0.7, 1],
          delay: 1,
        }}
      />

      {/* Small accent circle */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-blue-300/20 blur-xl"
        animate={{
          y: [0, -15, 10, 0],
          x: [0, 15, -10, 0],
          scale: [0.8, 1.2, 1, 0.8],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />

      {/* Floating dots */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-blue-400/30"
          style={{
            top: `${20 + i * 20}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
    </div>
  );
}
