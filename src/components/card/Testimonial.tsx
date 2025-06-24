// import { useEffect, useState } from "react";
// import "./testimonial.css"
// // all reviews that i have got as of now.
//   const testimonials = [
//     {
//       text: "\"Thank you Dipesh for the work that you provided. I'm happy to have worked with him - he's responsible, good with communication, and works to fulfill the task according to the buyer's requirement. Recommended.\"",
//       author: "Hando, South Korea",
//     },
//     {
//       text: '"We collaborated with him on strategies to grow our social media presence from 25 million subscribers to an even larger audience. He provided significant assistance during a short-term project, contributing greatly to the task."',
//       author: "LankyBox",
//     },
//     {
//       text: '"We collaborated on content creation for a short-term project, focusing on Nepali sports, mainly cricket, to reach a global audience."',
//       author: "Wicket Nepal - Owner",
//     },
//   ];

// export default function AllTestimonial(){
//   // adding the state for the better stating of the page.
//     const [activeIndex, setActiveIndex] = useState(0);
  
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setActiveIndex((prev) => (prev + 1) % testimonials.length);
//       }, 3000);
//       return () => clearInterval(interval);
//     }, []);
  

//   return (
//     <>
//         <section className="bg-[#06063a] py-16 w-full">
//           <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//             Testimonial
//           </h2>
          
//           <div className="w-full overflow-hidden relative h-96">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ 
//                 transform: `translateX(-${activeIndex * 100}%)`,
//                 width: `${testimonials.length * 100}%`
//               }}
//             >
//               {/* animation but not working with this way i have to remove the settimeout, */}
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className="w-full flex-shrink-0 px-4"
//                   style={{ width: `${100 / testimonials.length}%` }}
//                 >
//                   <div className="bg-[#000021] p-8 rounded-lg shadow-xl transition-all 
//                     hover:scale-[1.02] h-full">
//                     <p className="text-lg md:text-xl italic mb-6">
//                       {testimonial.text}
//                     </p>
//                     <h3 className="font-bold text-xl text-[#6c63ff]">
//                       {testimonial.author}
//                     </h3>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>


//           <div className="flex justify-center gap-2 mt-8">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={`w-3 h-3 rounded-full transition-all ${
//                   activeIndex === index 
//                   ? "bg-[#6c63ff] scale-125" 
//                   : "bg-gray-600 hover:scale-110"
//                 }`}
//               />
//             ))}
//           </div>
//         </section>
//     </>
//   )
// }

import { useEffect, useState } from "react";
import "./testimonial.css";

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
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="bg-[#06063a] py-16 w-full overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
        Testimonials
      </h2>
      
      <div className="w-full relative h-96">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${activeIndex * 100}%)`,
            width: `${testimonials.length * 100}%`
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
              style={{ width: `${100 / testimonials.length}%` }}
            >
              <div className="bg-[#000021] p-6 md:p-8 rounded-lg shadow-xl h-full hover:shadow-[0_0_30px_rgba(108,99,255,0.3)]">
                <div className="relative">
                  <span className="absolute -top-6 -left-4 text-6xl text-[#6c63ff] opacity-20">“</span>
                  <p className="text-white text-lg md:text-xl italic mb-6 pl-8 relative z-10">
                    {testimonial.text}
                  </p>
                </div>
                <h3 className="font-bold text-xl text-[#6c63ff]">
                  {testimonial.author}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === index 
              ? "bg-[#6c63ff] scale-125" 
              : "bg-gray-600 hover:scale-110"
            }`}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}