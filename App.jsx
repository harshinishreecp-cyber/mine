import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Poem from './components/Poem';
import ValentineWeek from './components/ValentineWeek';
import LoveLetter from './components/LoveLetter';
import FinalSection from './components/FinalSection';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showMusicNote, setShowMusicNote] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Note: You would need to add an actual music file to the public folder
    // For now, this is a placeholder for the music functionality
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play().catch(error => {
          console.log('Audio playback failed:', error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying]);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <div className="relative">
      {/* Floating Hearts Background */}
      <FloatingHearts />

      {/* Music Toggle Button */}
      <motion.button
        className="fixed top-6 right-6 z-50 w-16 h-16 rounded-full glass shadow-2xl flex items-center justify-center text-2xl"
        onClick={toggleMusic}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: isMusicPlaying
            ? '0 0 30px rgba(255, 182, 193, 0.8)'
            : '0 0 10px rgba(255, 182, 193, 0.3)',
        }}
      >
        <AnimatePresence mode="wait">
          {isMusicPlaying ? (
            <motion.span
              key="pause"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              🔊
            </motion.span>
          ) : (
            <motion.span
              key="play"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              🔇
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Music Note Indicator */}
      <AnimatePresence>
        {showMusicNote && (
          <motion.div
            className="fixed top-24 right-6 z-50 glass p-3 rounded-lg shadow-lg text-sm text-gray-700 max-w-xs"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setShowMusicNote(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-blush rounded-full text-white text-xs"
            >
              ×
            </button>
            <p className="text-xs">Click to toggle romantic music 🎵</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden Audio Element - Add your music file to public folder */}
      {/* <audio ref={audioRef} loop>
        <source src="/romantic-music.mp3" type="audio/mpeg" />
      </audio> */}

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <Timeline />
        <Poem />
        <ValentineWeek />
        <LoveLetter />
        <FinalSection />
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 bg-gradient-to-r from-blush to-lavender text-center text-white">
        <motion.p
          className="text-sm font-light"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Made with 💕 for Harshini Shree
        </motion.p>
      </footer>
    </div>
  );
}

export default App;
