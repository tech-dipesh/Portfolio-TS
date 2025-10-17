import { Link } from 'react-router-dom';
import useVisitorCounter from "../hooks/visitCount.ts";
import { motion } from 'framer-motion';

import Github from "../../assets/social-media/github.png";
import linkedinIcon from '../../assets/social-media/linkedin.png';
import twitterIcon from '../../assets/social-media/twitter.png';
// import discordIcon from "../../assets/social-media/discord.png"
import leetcodeIcon from "../../assets/social-media/leetcode.png"

// gropuding the every category
const linkGroups = [
  {
    title: "Main",
    items: [
      { name: 'Home', to: '/' },
      { name: 'About', to: '/about' },
      { name: 'Contact', to: '/contact' },
      { name: 'Resume', to: '/resume' },
    ]
  },
  {
    title: "Projects",
    items: [
      { name: 'All Projects', to: '/projects' },
      { name: 'Open Source', to: '/open-source' },
      { name: '3D', to: '/3d' },
    ]
  },
  {
    title: "Resources",
    items: [
      { name: 'Skills', to: '/skills' },
      { name: 'Gadgets', to: '/gadgets' },
      { name: 'Blogs', to: '/blogs' },
      { name: 'Command', to: '/command' },
    ]
  }
];

// have to make the separate listing for the styling
const socials = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/tech-dipesh' },
  { name: 'LinkedIn', icon: linkedinIcon, url: 'https://linkedin.com/in/tech-dipesh' },
  { name: 'Twitter', icon: twitterIcon, url: 'https://x.com/tec_dipesh'},
  // { name: 'Discord', icon: discordIcon, url: 'https://discord.com' },
  { name: 'LeetCode', icon: leetcodeIcon, url: 'https://leetcode/u/tech-dipesh/' },
];
export default function Footer() {
  const visits = useVisitorCounter();
// showing the total visitor
  return (
    <footer className="w-full bg-[#06063a] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-semibold mb-4 text-[#3498db]">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="hover:text-[#8a2be2] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}


          <div>
            <h3 className="text-lg font-semibold mb-4 text-[rgb(52,152,219)]">Connect</h3>
            <div className="grid grid-cols-2 gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:scale-105 transition-transform"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="h-6 w-6 mr-2"
                  />
                  <span className="text-sm">{social.name}</span>
                </a>
              ))}
            </div>
            {/* i have add te infinity animation on thee total vistor  */}
            <motion.div 
              className="mt-6 p-3 bg-[#30339d] rounded-lg"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 2 
              }}
            >
              <p className="text-sm font-medium">Total Visitors</p>
              {/* showing the total vistior based onr the localstorage tracking. */}
              <p className="text-2xl font-bold text-[#8a2be2]">{visits.toLocaleString()}</p>
            </motion.div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Dipesh Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}