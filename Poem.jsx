import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Poem = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const petalArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
    }));
    setPetals(petalArray);
  }, []);

  const poemLines = [
    "You weren't love at first sight,",
    "You were love at every moment after.",
    "",
    "In the silence of classrooms,",
    "In the space between words,",
    "In the way you stayed —",
    "",
    "You slowly became my peace.",
    "",
    "Not because you tried,",
    "But because you cared.",
    "",
    "You didn't change my world loudly,",
    "You changed it gently.",
    "",
    "And now,",
    "Every future I imagine…",
    "Has you in it.",
  ];

  return (
    <section className="relative py-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-blush/20 via-lavender/30 to-cream">
      {/* Floating Petals */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute text-4xl opacity-60"
          style={{
            left: `${petal.x}%`,
            top: '-10%',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.random() * 100 - 50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🌸
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="glass max-w-3xl mx-auto p-12 rounded-3xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-center space-y-4">
            {poemLines.map((line, index) => (
              <motion.p
                key={index}
                className={`${
                  line === "" ? "h-4" : "text-xl md:text-2xl text-gray-800 font-light italic"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            className="mt-8 text-center text-4xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            💗
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Poem;
