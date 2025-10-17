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
import GitHub from "../../assets/social-media/github.png";
import Notion from "../../assets/skills/notion.png";
import Figma from "../../assets/skills/figma.png";
import API from "../../assets/skills/api.webp";
import { useState, useEffect, useRef } from "react";
const SkillsTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // stored skilsl on the array, whiich i can access by foreach or map
  const skills = [
    { name: "JavaScript", percent: "92%", logo: Javascript },
    { name: "C++", percent: "90%", logo: Cpp },
    { name: "TypeScript", percent: "80%", logo: TypeScript },
    { name: "React (Library)", percent: "80%", logo: React },
    { name: "Node.js", percent: "88%", logo: NodeJs },
    { name: "MongoDb", percent: "70%", logo: MongoDB },
    { name: "Express.Js", percent: "75%", logo: Express },
    { name: "Next.js", percent: "70%", logo: Nextjs },
    { name: "Socket.IO", percent: "60%", logo: SocketIo },
    { name: "Git", percent: "80%", logo: Git },
    { name: "Docker", percent: "26%", logo: Docker },
    { name: "API", percent: "72%", logo: API },
    { name: "MYSql", percent: "65%", logo: MySql },
    { name: "Figma", percent: "65%", logo: Figma },
    { name: "Notion", percent: "75%", logo: Notion },
    { name: "Github", percent: "95%", logo: GitHub },
  ];



  // if user slide down which need to animation for the user 
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
// if user is disocnnect i can remove this later.
    return () => observer.disconnect();
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
                  {/* above one is for the custom animation for the each */}
                  <span className="text-sm float-right mr-2">
                    {skill.percent}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SkillsTestimonials;
