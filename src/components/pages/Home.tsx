import { motion } from 'framer-motion';
import linkedinIcon from '../../assets/skills/linkedin.png';
import SkillsTestimonials from '../add/Skills';
import Me from "../../assets/images/developer-ai.webp"
import Command from '../add/Command';
export default function Home() {
  return (
    <main className="min-h-screen bg-[#06063a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 mr-200">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 "
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
          className="mt-6 inline-block hover:opacity-80"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
        </motion.a>
      <img src={Me} className='h-2xl w-2xl absolute right-20 top-20' alt="https://static.vecteezy.com/system/resources/previews/029/711/176/non_2x/developer-with-ai-generated-free-png.png" />
      </div>
      <Command/>
      <SkillsTestimonials/>
    </main>
  );
}