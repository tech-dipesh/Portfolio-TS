import { motion } from 'framer-motion';
import TypingHero from '../home/typing'; // Import our fixed typing component
import TestimonialCarousel from '../card/Testimonial.tsx'; // Import our new testimonial carousel
import Command from '../add/Command';
import Me from "../../assets/images/developer-ai.webp";


export default function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <main className="min-h-screen bg-[#06063a] text-white">
      {/* Hero Section with Typing Animation */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="md:w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <TypingHero />
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 mt-12 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img 
            src={Me} 
            className="w-full max-w-xl mx-auto" 
            alt="Developer Illustration" 
          />
        </motion.div>
      </section>
      
      {/* Command Palette Section */}
      <Command />
      
      {/* Testimonials Section */}
      <TestimonialCarousel />
      
      {/* Skills Section */}
      <motion.section 
        className="py-20 bg-[#030328]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#8a2be2] mb-12">My Skills</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'Tailwind CSS', 'Git', 'Docker', 'Socket.IO'].map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-[#30339d] p-4 rounded-lg text-center hover:bg-[#3498db] transition-colors"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <motion.a
              href="/skills"
              className="inline-block bg-[#8a2be2] text-white px-6 py-3 rounded-lg hover:bg-[#7a1be2] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Skills
            </motion.a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}