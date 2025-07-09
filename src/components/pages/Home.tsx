import { motion } from 'framer-motion';
import linkedinIcon from '../../assets/social-media/linkedin.png';
import SkillsTestimonials from '../card/Skills';
import Me from "../../assets/images/developer-ai.webp"
import Command from '../add/Command';
import AllTestimonial from '../card/Testimonial';
import Typed from "typed.js"
import React from 'react';


export default function Home() {
  // my first page when user enter on my website
  
// content need to add:
// "Hi, I'm Dipesh Sharma – Full Stack Developer"
// later image:
// https://www.linkedin.com/in/tech-dipesh

    const el = React.useRef(null);
    React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      typeSpeed: 50,
    });

      React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  
  return (
    <main className="min-h-screen bg-[#06063a] text-white">
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">

      <div className="App">
      <span ref={el} />
    </div>
      <div className="md:w-1/2">
        <motion.div
          className="mt-20 "
        >
          <h1 className="text-4xl font-bold text-purple-500">
            Hi, I'm Dipesh Sharma – Full Stack Developer
          </h1>
        </motion.div>

        <motion.a
          href="https://www.linkedin.com/in/tech-dipesh"
          target="_blank"
          // rel="noopener noreferrer"
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
        className="w-full mt-2 max-w-xl" 
        alt="My Image" 
      />
    </div>
    
      </div>
      <Command/>
      <SkillsTestimonials/>
      <AllTestimonial/>
    </main>
  );
}

