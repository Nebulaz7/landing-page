import { motion } from "framer-motion";

const AuvraHeroAnimation = () => {
  return (
    <div className="w-full h-96 flex items-center justify-center">
      <svg
        width="600"
        height="420"
        viewBox="0 0 400 320"
        className="w-full h-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="rgba(139, 92, 246, 0.1)"
              strokeWidth="0.5"
            />
          </pattern>

          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>

          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#A855F7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0.2" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Input Node - Document/Text Icon */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <rect
            x="20"
            y="80"
            width="60"
            height="40"
            rx="12"
            fill="url(#nodeGradient)"
            stroke="#8B5CF6"
            strokeWidth="2"
            filter="url(#glow)"
          />

          {/* Document Icon */}
          <g transform="translate(40, 90)">
            <rect
              x="0"
              y="0"
              width="16"
              height="20"
              rx="2"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            <path
              d="M12 0 L12 6 L18 6"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            <line
              x1="4"
              y1="8"
              x2="12"
              y2="8"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
            <line
              x1="4"
              y1="12"
              x2="14"
              y2="12"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
            <line
              x1="4"
              y1="16"
              x2="10"
              y2="16"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
          </g>

          {/* Typing cursor animation */}
          <motion.line
            x1="62"
            y1="110"
            x2="62"
            y2="115"
            stroke="#FFFFFF"
            strokeWidth="2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.g>

        {/* Connection line with data flow */}
        <motion.line
          x1="80"
          y1="100"
          x2="135"
          y2="100"
          stroke="#8B5CF6"
          strokeWidth="3"
          strokeDasharray="0"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />

        {/* AI Brain Node */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <circle
            cx="170"
            cy="100"
            r="28"
            fill="url(#nodeGradient)"
            stroke="#8B5CF6"
            strokeWidth="2"
            filter="url(#glow)"
          />

          {/* Neural Network Brain Icon */}
          <g transform="translate(155, 85)">
            {/* Central core */}
            <circle cx="15" cy="15" r="4" fill="#FFFFFF" />

            {/* Neural connections */}
            <circle cx="8" cy="8" r="2.5" fill="#FFFFFF" opacity="0.8" />
            <circle cx="22" cy="8" r="2.5" fill="#FFFFFF" opacity="0.8" />
            <circle cx="8" cy="22" r="2.5" fill="#FFFFFF" opacity="0.8" />
            <circle cx="22" cy="22" r="2.5" fill="#FFFFFF" opacity="0.8" />
            <circle cx="4" cy="15" r="2" fill="#FFFFFF" opacity="0.6" />
            <circle cx="26" cy="15" r="2" fill="#FFFFFF" opacity="0.6" />

            {/* Connection lines */}
            <line
              x1="15"
              y1="15"
              x2="8"
              y2="8"
              stroke="#FFFFFF"
              strokeWidth="1"
              opacity="0.8"
            />
            <line
              x1="15"
              y1="15"
              x2="22"
              y2="8"
              stroke="#FFFFFF"
              strokeWidth="1"
              opacity="0.8"
            />
            <line
              x1="15"
              y1="15"
              x2="8"
              y2="22"
              stroke="#FFFFFF"
              strokeWidth="1"
              opacity="0.8"
            />
            <line
              x1="15"
              y1="15"
              x2="22"
              y2="22"
              stroke="#FFFFFF"
              strokeWidth="1"
              opacity="0.8"
            />
            <line
              x1="15"
              y1="15"
              x2="4"
              y2="15"
              stroke="#FFFFFF"
              strokeWidth="1"
              opacity="0.6"
            />
            <line
              x1="15"
              y1="15"
              x2="26"
              y2="15"
              stroke="#FFFFFF"
              strokeWidth="1"
              opacity="0.6"
            />
          </g>

          {/* AI processing waves */}
          <motion.circle
            cx="170"
            cy="100"
            r="35"
            fill="none"
            stroke="#A855F7"
            strokeWidth="1"
            opacity="0.4"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.1, 0.4],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="170"
            cy="100"
            r="42"
            fill="none"
            stroke="#C084FC"
            strokeWidth="1"
            opacity="0.3"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.05, 0.3],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
        </motion.g>

        {/* Connection branches with enhanced flow */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <line
            x1="195"
            y1="100"
            x2="250"
            y2="60"
            stroke="#8B5CF6"
            strokeWidth="3"
          />
          <line
            x1="195"
            y1="100"
            x2="250"
            y2="140"
            stroke="#8B5CF6"
            strokeWidth="3"
          />
          <line
            x1="195"
            y1="100"
            x2="250"
            y2="200"
            stroke="#8B5CF6"
            strokeWidth="3"
          />
        </motion.g>

        {/* Voice/Speaker Node */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <rect
            x="250"
            y="40"
            width="60"
            height="40"
            rx="12"
            fill="url(#nodeGradient)"
            stroke="#8B5CF6"
            strokeWidth="2"
            filter="url(#glow)"
          />

          {/* Speaker Icon with sound waves */}
          <g transform="translate(268, 52)">
            <rect x="0" y="6" width="6" height="8" rx="1" fill="#FFFFFF" />
            <polygon points="6,8 12,4 12,16 6,12" fill="#FFFFFF" />
            <path
              d="M15 6 Q18 8 18 10 Q18 12 15 14"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
            <motion.path
              d="M20 4 Q24 7 24 10 Q24 13 20 16"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </g>
        </motion.g>

        {/* Emotion/Heart Node */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          <rect
            x="250"
            y="120"
            width="60"
            height="40"
            rx="12"
            fill="url(#nodeGradient)"
            stroke="#8B5CF6"
            strokeWidth="2"
            filter="url(#glow)"
          />

          {/* Heart/Emotion Icon */}
          <g transform="translate(268, 132)">
            <motion.path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#FFFFFF"
              scale="0.6"
              animate={{
                scale: [0.6, 0.7, 0.6],
                fill: ["#FFFFFF", "#FFB3BA", "#FFFFFF"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Emotion particles */}
            {[...Array(3)].map((_, i) => (
              <motion.circle
                key={i}
                cx={8 + i * 4}
                cy="2"
                r="1"
                fill="#FFB3BA"
                animate={{
                  y: [2, -5, 2],
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </g>
        </motion.g>

        {/* Audio Effects/Waveform Node */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          <rect
            x="250"
            y="180"
            width="60"
            height="40"
            rx="12"
            fill="url(#nodeGradient)"
            stroke="#8B5CF6"
            strokeWidth="2"
            filter="url(#glow)"
          />

          {/* Equalizer/Effects Icon */}
          <g transform="translate(265, 190)">
            {[...Array(6)].map((_, i) => (
              <motion.rect
                key={i}
                x={i * 5}
                y="10"
                width="3"
                height="8"
                rx="1"
                fill="#FFFFFF"
                animate={{
                  height: [8, 15, 5, 12, 8],
                  y: [10, 2.5, 12.5, 6, 10],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </g>
        </motion.g>

        {/* Output connections */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <line
            x1="310"
            y1="60"
            x2="350"
            y2="120"
            stroke="#8B5CF6"
            strokeWidth="3"
          />
          <line
            x1="310"
            y1="140"
            x2="350"
            y2="120"
            stroke="#8B5CF6"
            strokeWidth="3"
          />
          <line
            x1="310"
            y1="200"
            x2="350"
            y2="120"
            stroke="#8B5CF6"
            strokeWidth="3"
          />
        </motion.g>

        {/* Final Output - Advanced Audio Symbol */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          <circle
            cx="370"
            cy="120"
            r="25"
            fill="url(#nodeGradient)"
            stroke="#8B5CF6"
            strokeWidth="2"
            filter="url(#glow)"
          />

          {/* Headphones/Audio Output Icon */}
          <g transform="translate(355, 105)">
            <path
              d="M15 3C8.925 3 4 7.925 4 14v8c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H6c0-4.42 3.58-8 8-8s8 3.58 8 8h-2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-8c0-6.075-4.925-11-11-11z"
              fill="#FFFFFF"
              scale="0.8"
            />
          </g>

          {/* Audio visualization */}
          <motion.g transform="translate(355, 132)">
            {[...Array(7)].map((_, i) => (
              <motion.rect
                key={i}
                x={i * 4}
                y="8"
                width="2"
                height="4"
                rx="1"
                fill="#FFFFFF"
                animate={{
                  height: [4, 12, 6, 14, 8, 10, 4],
                  y: [8, 2, 5, 1, 4, 3, 8],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.1 + 3.5,
                }}
              />
            ))}
          </motion.g>
        </motion.g>

        {/* Enhanced floating sound waves */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
        >
          {[...Array(4)].map((_, i) => (
            <motion.path
              key={i}
              d={`M 395 ${110 + i * 8} Q 405 ${105 + i * 8} 415 ${110 + i * 8}`}
              stroke="url(#waveGradient)"
              strokeWidth="2"
              fill="none"
              animate={{
                opacity: [0, 0.8, 0],
                pathLength: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2 + 4,
              }}
            />
          ))}
        </motion.g>

        {/* Enhanced data flow particles */}
        {[
          { from: { x: 80, y: 100 }, to: { x: 142, y: 100 }, delay: 1.5 },
          { from: { x: 198, y: 100 }, to: { x: 250, y: 60 }, delay: 2.5 },
          { from: { x: 198, y: 100 }, to: { x: 250, y: 140 }, delay: 2.7 },
          { from: { x: 198, y: 100 }, to: { x: 250, y: 200 }, delay: 2.9 },
          { from: { x: 310, y: 60 }, to: { x: 345, y: 120 }, delay: 3.5 },
          { from: { x: 310, y: 140 }, to: { x: 345, y: 120 }, delay: 3.7 },
          { from: { x: 310, y: 200 }, to: { x: 345, y: 120 }, delay: 3.9 },
        ].map((particle, i) => (
          <motion.circle
            key={i}
            r="3"
            fill="#A855F7"
            filter="url(#glow)"
            initial={{
              x: particle.from.x,
              y: particle.from.y,
              opacity: 0,
            }}
            animate={{
              x: particle.to.x,
              y: particle.to.y,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.2,
              delay: particle.delay,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default AuvraHeroAnimation;
