import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LankyBox from "../../assets/images/lankybox.jpg";

const testimonials = [
  {
    text: "Thank you Dipesh for the work that you provided. I'm happy to have worked with him - he's responsible, good with communication, and works to fulfill the task according to the buyer's requirement. Recommended.",
    author: "Hando",
    location: "South Korea",
    rating: 5,
    avatar: "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg"
  },
  {
    text: "We collaborated with him on strategies to grow our social media presence from 25 million subscribers to an even larger audience. He provided significant assistance during a short-term project, contributing greatly to the task.",
    author: "LankyBox",
    location: "Content Creator",
    rating: 5,
    avatar: LankyBox
  },
  {
    text: "We collaborated on content creation for a short-term project, focusing on Nepali sports, mainly cricket, to reach a global audience.",
    author: "Wicket Nepal",
    location: "Sports Media",
    rating: 5,
    avatar: "https://i0.wp.com/wicketnepal.com/wp-content/uploads/2022/07/cropped-wicketnepal-1.png"
  },
  {
    text: "It's not a big project but for the BPL 23/24, opportunity to work for the Bangladesh Premier League as it's my first time experience working with it.",
    author: "HOMEOFT20",
    location: "Bangladesh",
    rating: 4,
    avatar: "https://homeoft20.com/wp-content/uploads/2025/01/cropped-Home-of-T20-2048x993.png"
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function AllTestimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-gradient-to-b from-[#06063a] to-[#000021] py-20 w-full relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take my word for it - here's what my clients have to say about working with me
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="mx-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-gradient-to-r from-[#1a1a3a]/80 to-[#2a2a5a]/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].author}
                      className="w-24 h-24 rounded-full border-4 border-purple-400/50 shadow-lg object-cover"
                    />
                  </div>

                  <div className="flex-1 text-center md:text-left">

                    <p className="text-white text-lg md:text-xl leading-relaxed mb-6 font-medium">
                      "{testimonials[activeIndex].text}"
                    </p>

                    <div className="flex justify-center md:justify-start mb-4">
                      <StarRating rating={testimonials[activeIndex].rating} />
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-purple-300 mb-1">
                        {testimonials[activeIndex].author}
                      </h4>
                      <p className="text-gray-400 text-lg">
                        {testimonials[activeIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 ${
                  activeIndex === index 
                    ? "w-12 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" 
                    : "w-3 h-3 bg-gray-600 hover:bg-gray-400 rounded-full hover:scale-125"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="w-full bg-gray-700/50 h-1 rounded-full mt-8 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-400 to-blue-400"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              key={activeIndex}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">6</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-400 mb-2">100k+</div>
            <div className="text-gray-400">Audience Reached</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">2.5+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}