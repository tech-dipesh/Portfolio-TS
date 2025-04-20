import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import linkedinIcon from '../../assets/skills/linkedin.png';

export default function TypingHero() {
  const fullText = "Hi, I'm Dipesh Sharma – Full Stack Developer";
  const [displayedText, setDisplayedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
      }
    }, 100); // Slightly slower for better visibility

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-[60vh] px-4 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        {displayedText}
        {!typingComplete && <span className="animate-blink text-[#8a2be2]">|</span>}
      </h1>

      {typingComplete && (
        <motion.a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition-transform"
          />
        </motion.a>
      )}
    </section>
  );
}