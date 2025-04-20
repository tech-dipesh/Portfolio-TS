import "./Skills.css";
import Javascript from "../../assets/skills/javascript.png";
import TypeScript from "../../assets/skills/typescript.png";
import Express from "../../assets/skills/express.png";
import React from "../../assets/skills/react.png";
import NodeJs from "../../assets/skills/nodejs.png";
import MongoDB from "../../assets/skills/mongo-db.png";
import Nextjs from "../../assets/skills/nextjs.png";
import Docker from "../../assets/skills/docker.png";
import SocketIo from "../../assets/skills/socketio.png";
import Cpp from "../../assets/skills/cpp.png";
import MySql from "../../assets/skills/mysql.png";
import Git from "../../assets/skills/git.png";
import GitHub from "../../assets/skills/github.png";
import Notion from "../../assets/skills/notion.png";
import Figma from "../../assets/skills/figma.png";
import API from "../../assets/skills/api.webp";
import { useState, useEffect, useRef } from "react";
const SkillsTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "JavaScript", percent: "92%", logo: Javascript },
    { name: "TypeScript", percent: "80%", logo: TypeScript },
    { name: "React (Library)", percent: "80%", logo: React },
    { name: "Node.js", percent: "88%", logo: NodeJs },
    { name: "MongoDb", percent: "75%", logo: MongoDB },
    { name: "Express.Js", percent: "75%", logo: Express },
    { name: "Next.js", percent: "70%", logo: Nextjs },
    { name: "Socket.IO", percent: "60%", logo: SocketIo },
    { name: "Git", percent: "80%", logo: Git },
    { name: "Docker", percent: "50%", logo: Docker },
    { name: "API", percent: "90%", logo: API },
    { name: "MYSql", percent: "65%", logo: MySql },
    { name: "C++", percent: "80%", logo: Cpp },
    { name: "Figma", percent: "65%", logo: Figma },
    { name: "Notion", percent: "75%", logo: Notion },
    { name: "Github", percent: "80%", logo: GitHub },
  ];

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#000021] text-white w-full px-4 md:px-8"
    >
      <div className="w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-slide-down">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`${
                isVisible ? "animate-pop-in" : "opacity-0"
              } transition-transform duration-500 hover:scale-[1.02]`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-2">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="h-12 w-12 object-contain"
                />
                <p className="font-semibold text-lg">{skill.name}</p>
              </div>
              <div className="h-6 bg-[#27293d] rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-[#6c63ff] to-[#5a52e0] rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? skill.percent : "0%",
                    transitionDelay: `${index * 100 + 300}ms`,
                  }}
                >
                  <span className="text-sm float-right mr-2">
                    {skill.percent}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

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
      </div>
    </section>
  );
};
export default SkillsTestimonials;
