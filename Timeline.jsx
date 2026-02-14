import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TimelineCard = ({ moment, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="flex items-center mb-16 relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Timeline Line Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blush to-lavender rounded-full border-4 border-white shadow-lg z-10" />

      {/* Card */}
      <motion.div
        className={`glass w-5/12 p-6 rounded-2xl shadow-xl ${
          index % 2 === 0 ? 'mr-auto text-right' : 'ml-auto text-left'
        }`}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 30px rgba(255, 182, 193, 0.6)",
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-lg text-gray-800 font-medium">{moment}</p>
      </motion.div>
    </motion.div>
  );
};

const Timeline = () => {
  const moments = [
    "First saw her in class wearing a sudithar",
    "4 weeks of silent admiration",
    "Finally spoke to her",
    "Birthday memory with cake and black chocolate heart",
    "She supported and corrected me",
    "She changed my view about love",
    "Slowly falling for her",
    "Dreaming of studying and building future together",
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-cream via-white to-lavender/30">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blush to-lavender"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Journey Together
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blush via-lavender to-blush" />

          {/* Timeline Cards */}
          {moments.map((moment, index) => (
            <TimelineCard key={index} moment={moment} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
