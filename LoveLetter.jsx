import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-lavender/20 to-blush/30">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blush to-lavender"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          A Letter For You
        </motion.h2>

        <div className="flex justify-center items-center">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="envelope"
                className="relative cursor-pointer"
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Envelope */}
                <div className="relative w-80 h-56">
                  {/* Envelope Body */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blush to-lavender rounded-lg shadow-2xl"
                    whileHover={{
                      boxShadow: "0 0 40px rgba(255, 182, 193, 0.8)",
                    }}
                  />

                  {/* Envelope Flap */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-lavender to-blush origin-top"
                    style={{
                      clipPath: 'polygon(0 0, 50% 60%, 100% 0)',
                    }}
                    animate={{
                      rotateX: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Heart Seal */}
                  <motion.div
                    className="absolute top-16 left-1/2 transform -translate-x-1/2 text-5xl"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    💌
                  </motion.div>

                  <p className="absolute bottom-6 left-0 right-0 text-center text-white font-semibold">
                    Click to open
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="letter"
                className="glass max-w-2xl p-12 rounded-3xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Dear Harshini,
                  </h3>
                </div>

                <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
                  <p>You came into my life quietly,</p>
                  <p>but changed it completely.</p>
                  <p className="mt-4">You made me believe again.</p>
                  <p className="mt-4">Between smiles and support,</p>
                  <p>you became my safe place.</p>
                  <p className="mt-4">
                    No matter where life takes us,
                    <br />I want every chapter to have you.
                  </p>
                  <p className="mt-8 text-right italic font-semibold">
                    — Yours ❤️
                  </p>
                </div>

                <motion.button
                  className="mt-8 w-full py-3 bg-gradient-to-r from-blush to-lavender text-white rounded-full font-semibold shadow-lg"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close Letter
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
