import { useEffect, useState } from "react";

const testimonials = [
  {
    text: "\"Thank you Dipesh for the work that you provided. I'm happy to have worked with him - he's responsible, good with communication, and works to fulfill the task according to the buyer's requirement. Recommended.\"",
    author: "Hando, South Korea",
  },
  {
    text: '"We collaborated with him on strategies to grow our social media presence from 25 million subscribers to an even larger audience. He provided significant assistance during a short-term project, contributing greatly to the task."',
    author: "LankyBox",
  },
  {
    text: '"We collaborated on content creation for a short-term project, focusing on Nepali sports, mainly cricket, to reach a global audience."',
    author: "Wicket Nepal - Owner",
  },
];

export default function AllTestimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('next');
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setDirection('prev');
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection('next');
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-[#06063a] py-12 md:py-16 w-full overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-center text-white">
        Testimonial
      </h2>
      
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Testimonial Cards with Flip Animation */}
        <div className="relative h-[300px] md:h-[350px] perspective-1000">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                activeIndex === index 
                  ? 'opacity-100 z-10' 
                  : 'opacity-0 z-0 translate-x-full'
              } ${
                activeIndex === index && direction === 'prev' 
                  ? 'animate-fade-in-left' 
                  : activeIndex === index && direction === 'next'
                    ? 'animate-fade-in-right'
                    : ''
              }`}
              style={{ 
                backfaceVisibility: 'hidden',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="bg-gradient-to-br from-[#0a0a4a] to-[#000021] p-6 md:p-8 rounded-2xl shadow-2xl border border-[#6c63ff]/30 h-full flex flex-col justify-between">
                <div className="mb-4">
                  <div className="text-[#6c63ff] text-5xl absolute top-4 left-4 opacity-20">“</div>
                  <p className="text-white text-base md:text-lg italic relative z-10 pl-8">
                    {testimonial.text}
                  </p>
                </div>
                <div className="border-t border-[#6c63ff]/30 pt-4">
                  <h3 className="font-bold text-lg md:text-xl text-[#6c63ff]">
                    {testimonial.author}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center mt-8 md:mt-12 gap-6">
          <button 
            onClick={handlePrev}
            className="text-[#6c63ff] hover:text-white bg-[#000021]/50 p-3 rounded-full hover:bg-[#6c63ff] transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 'next' : 'prev');
                  setActiveIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index 
                  ? "bg-[#6c63ff] scale-125" 
                  : "bg-gray-600 hover:scale-110"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={handleNext}
            className="text-[#6c63ff] hover:text-white bg-[#000021]/50 p-3 rounded-full hover:bg-[#6c63ff] transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Add this to your global CSS file or in a style tag */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px) rotateY(15deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0);
          }
        }
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px) rotateY(-15deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0);
          }
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.7s ease-out forwards;
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  )
}