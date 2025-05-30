import { motion } from 'framer-motion';
import linkedinIcon from '../../assets/social-media/linkedin.png';
import SkillsTestimonials from '../card/Skills';
import Me from "../../assets/images/developer-ai.webp"
import Command from '../add/Command';
import AllTestimonial from '../card/Testimonial';
export default function Home() {
  // my first page when user enter on my website
  return (
    <main className="min-h-screen bg-[#06063a] text-white">
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2">
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
          href="https://www.linkedin.com/in/tech-dipesh"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-6 inline-block hover:opacity-80"
          >
          <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
        </motion.a>
          </div>
          {/* used the local file rather than online image which anytime can be deleted also the animation */}
      {/* <img src={Me} className='h-2xl w-2xl right-20 top-20' alt="https://static.vecteezy.com/system/resources/previews/029/711/176/non_2x/developer-with-ai-generated-free-png.png" /> */}
       <div className="md:w-1/2 mt-8 md:mt-0">
      <img 
        src={Me} 
        className="w-full max-w-xl" 
        alt="Developer Illustration" 
      />
    </div>
    
      </div>
      <Command/>
      <SkillsTestimonials/>
      <AllTestimonial/>
    </main>
  );
}