import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
import Tailwind from "../../assets/skills/tailwind.png";
import Materialui from "../../assets/skills/materialui.png";
import Git from "../../assets/skills/git.png";
import GitHub from "../../assets/social-media/github.png";
import Vite from "../../assets/skills/vite.png";
import Notion from "../../assets/skills/notion.png";
import Figma from "../../assets/skills/figma.png";
import API from "../../assets/skills/api.webp";
import Npm from "../../assets/skills/npm.png";
import C from "../../assets/skills/c.webp";
import Vercel from "../../assets/skills/vercel.webp";

const skillCategories = [
  "All",
  "Frontend",
  "Backend",
  "DevOps",
  "Platform",
  "General",
  "DataBase",
];
// all category on array and skilss on objedct of array.
export const entireSkills = [
  { name: "TypeScript", category: "Frontend", logo: TypeScript },
  { name: "JavaScript", category: "Frontend", logo: Javascript },
  { name: "React", category: "Frontend", logo: React },
  { name: "Node.js", category: "Backend", logo: NodeJs },
  { name: "Express.Js", category: "Backend", logo: Express },
  { name: "MongoDB", category: "DataBase", logo: MongoDB },
  { name: "MySQl", category: "DataBase", logo: MySql },
  { name: "TailwindCSS", category: "Frontend", logo: Tailwind },
  { name: "Git", category: "Platform", logo: Git },
  { name: "Next.Js", category: "Frontend", logo: Nextjs },
  { name: "C++", category: "General", logo: Cpp },
  { name: "Bootstrap", category: "Backend", logo: NodeJs },
  { name: "Material UI", category: "Frontend", logo: Materialui },
  { name: "Vite", category: "Platform", logo: Vite },
  { name: "Vercel", category: "Platform", logo: Vercel },
  { name: "Figma", category: "Platform", logo: Figma },
  { name: "Notion", category: "Platform", logo: Notion },
  { name: "Postman", category: "DevOps", logo: API },
  { name: "Github", category: "Platform", logo: GitHub },
  { name: "Docker", category: "DevOps", logo: Docker },
  { name: "Socket.IO", category: "Platform", logo: SocketIo },
  { name: "NPM", category: "Platform", logo: Npm },
  { name: "C", category: "General", logo: C },
];

export default function AllSkillsPage() {
  // in default showing all listing
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // only showing that matched the category if user filter.
  const filteredSkills = entireSkills.filter((skill) =>
    activeCategory === "All" ? true : skill.category === activeCategory
  );

  // hiding other category if user select on another category.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#000021] text-white py-20"
          >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-[#00ffab]"
        >
          Skills:
        </motion.h2>
{/* motion template */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-[#6c63ff] text-white"
                  : "bg-[#27293d] hover:bg-[#3a3c4d]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#27293d] p-6 rounded-xl hover:bg-[#30324d] transition-colors"
            >
              <div className="flex flex-col items-center gap-4">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-20 h-20 object-contain"
                />
                <h3 className="text-xl font-semibold text-center">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

{/* show the form of the card rather than entire one line with the filter like above but with the filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-20 bg-[#06063a] p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-[#fbcb0a]">
            Expertise Distribution
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skillCategories.slice(1).map((category) => (
              <div key={category} className="bg-[#27293d] p-4 rounded-xl">
                <h4 className="text-lg font-semibold mb-3">{category}</h4>
                <ul className="space-y-2">
                  {entireSkills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <li
                        key={skill.name}
                        className="flex justify-between text-sm"
                      >
                        <span>{skill.name}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}