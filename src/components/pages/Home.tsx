import { motion } from 'framer-motion';
import linkedinIcon from '@/assets/skills/linkedin.png';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06063a] text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-20 ml-10"
      >
        <h1 className="text-4xl font-bold text-[#8a2be2]">
          Hi, I'm Dipesh Sharma – Full Stack Developer
        </h1>
      </motion.div>

      <motion.a
        href="https://www.linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-6 ml-10 inline-block hover:opacity-80"
      >
        <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
      </motion.a>
    </main>
  );
}