import { useEffect, useState } from "react";

// all reviews that i have got as of now.
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

export default function AllTestimonial(){
  // adding the state for the better stating of the page.
    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  

  return (
    <>
        <section className="bg-[#06063a] py-16 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Testimonial
          </h2>
          
          <div className="w-full overflow-hidden relative h-96">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${activeIndex * 100}%)`,
                width: `${testimonials.length * 100}%`
              }}
            >
              {/* animation but not working with this way i have to remove the settimeout, */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="bg-[#000021] p-8 rounded-lg shadow-xl transition-all 
                    hover:scale-[1.02] h-full">
                    <p className="text-lg md:text-xl italic mb-6">
                      {testimonial.text}
                    </p>
                    <h3 className="font-bold text-xl text-[#6c63ff]">
                      {testimonial.author}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index 
                  ? "bg-[#6c63ff] scale-125" 
                  : "bg-gray-600 hover:scale-110"
                }`}
              />
            ))}
          </div>
        </section>
    </>
  )
}



// // components/Testimonials.tsx
// import { useState, useEffect } from "react";
// import "./testimonial.css";
// interface Testimonial {
//   text: string;
//   author: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     text: "\"Thank you Dipesh for the work that you provided. I'm happy to have worked with him - he's responsible, good with communication, and works to fulfill the task according to the buyer's requirement. Recommended.\"",
//     author: "Hando, South Korea",
//   },
//   {
//     text: '"We collaborated with him on strategies to grow our social media presence from 25 million subscribers to an even larger audience. He provided significant assistance during a short-term project, contributing greatly to the task."',
//     author: "LankyBox",
//   },
//   {
//     text: '"We collaborated on content creation for a short-term project, focusing on Nepali sports, mainly cricket, to reach a global audience."',
//     author: "Wicket Nepal - Owner",
//   },
// ];

// export default function Testimonials() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Auto-rotation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex(prev => (prev + 1) % testimonials.length);
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-[#06063a] py-16 w-full">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
//           Testimonials
//         </h2>
        
//         {/* Fixed container with full width */}
//         <div className="w-full relative h-[350px] md:h-[300px]">
//           {testimonials.map((testimonial, index) => (
//             <div 
//               key={index}
//               className={`absolute inset-0 w-full transition-all duration-500 ease-in-out ${
//                 index === activeIndex 
//                   ? "opacity-100 translate-y-0" 
//                   : "opacity-0 translate-y-4 pointer-events-none"
//               }`}
//             >
//               {/* Full-width card container */}
//               <div className="w-full h-full flex justify-center">
//                 <div className="bg-[#000021] p-6 md:p-8 rounded-xl shadow-lg w-full max-w-4xl flex flex-col justify-center">
//                   <div className="relative">
//                     <span className="absolute -top-4 -left-4 text-6xl text-[#6c63ff] opacity-20">“</span>
//                     <p className="text-white text-lg md:text-xl italic mb-6 pl-8 relative z-10">
//                       {testimonial.text}
//                     </p>
//                   </div>
//                   <h3 className="font-bold text-xl text-[#6c63ff]">
//                     {testimonial.author}
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center gap-3 mt-8">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 activeIndex === index 
//                 ? "bg-[#6c63ff] scale-125" 
//                 : "bg-gray-600 hover:scale-110"
//               }`}
//               aria-label={`View testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }