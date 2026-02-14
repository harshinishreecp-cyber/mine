import { motion } from 'framer-motion';
import { useState } from 'react';

const FlipCard = ({ day, message, emoji, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="perspective-1000 w-full h-80"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.05 }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full glass rounded-2xl shadow-xl flex flex-col items-center justify-center p-6"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-6xl mb-4">{emoji}</div>
          <h3 className="text-2xl font-bold text-gray-800">{day}</h3>
          <p className="text-sm text-gray-600 mt-2">Click to reveal</p>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full glass rounded-2xl shadow-xl flex items-center justify-center p-6"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <p className="text-xl text-gray-800 text-center italic leading-relaxed">
            {message}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ValentineWeek = () => {
  const days = [
    {
      day: "Rose Day",
      message: "If love had a shape, it would look like your smile.",
      emoji: "🌹",
    },
    {
      day: "Propose Day",
      message: "My heart chose you long before I knew it.",
      emoji: "💍",
    },
    {
      day: "Chocolate Day",
      message: "You made life sweeter.",
      emoji: "🍫",
    },
    {
      day: "Teddy Day",
      message: "I wish I could hug you through every hard day.",
      emoji: "🧸",
    },
    {
      day: "Promise Day",
      message: "I promise to grow beside you.",
      emoji: "🤝",
    },
    {
      day: "Hug Day",
      message: "In your hug, everything feels right.",
      emoji: "🤗",
    },
    {
      day: "Kiss Day",
      message: "A kiss would say — I'm here.",
      emoji: "💋",
    },
    {
      day: "Valentine's Day",
      message: "I choose you. Always.",
      emoji: "💝",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-lavender/30 via-cream to-blush/20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blush to-lavender"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Valentine Week
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {days.map((item, index) => (
            <FlipCard
              key={index}
              day={item.day}
              message={item.message}
              emoji={item.emoji}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValentineWeek;
