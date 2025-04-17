import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import linkedinIcon from '../../assets/icons/linkedin.png';

export default function TypingHero() {
  const fullText = "Hi, I'm Dipesh Sharma – Full Stack Developer";
  const [displayedText, setDisplayedText] = useState('');
  const [showLinkedIn, setShowLinkedIn] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) {
        clearInterval(typingInterval);
        setTimeout(() => setShowLinkedIn(true), 800); // Pause before showing LinkedIn icon
      }
    }, 70); // Typing speed

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-[60vh] px-4 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        {displayedText}
        <span className="animate-blink text-[8a2be2]">|</span>
      </h1>

      {showLinkedIn && (
        <motion.a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
        </motion.a>
      )}
    </section>
  );
}
