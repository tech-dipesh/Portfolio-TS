import { Link } from 'react-router-dom';
import useVisitorCounter from "../hooks/visitCount.ts";

import Github from "../../assets/skills/github.png";
import linkedinIcon from '../../assets/skills/linkedin.png';
import twitterIcon from '../../assets/skills/twitter.png';
import discordIcon from '../../assets/skills/discord.png';

const links = [
  { name: 'Home', to: '/' },
  { name: 'Projects', to: '/projects' },
  { name: 'Resume', to: '/resume' },
  { name: 'Gadgets', to: '/gadgets' },
  { name: 'Contact', to: '/contact' },
  { name: 'Command', to: '/3d' },
  { name: 'about', to: '/contact' },
  { name: 'Contact', to: '/contact' },
];

const socials = [
  { name: 'GitHub', icon: Github, url: 'https://github.com' },
  { name: 'LinkedIn', icon: linkedinIcon, url: 'https://linkedin.com' },
  { name: 'Twitter', icon: twitterIcon, url: 'https://twitter.com' },
  { name: 'Discord', icon: discordIcon, url: 'https://discord.com' },
];

export default function Footer() {
  const visits = useVisitorCounter();

  return (
    <footer className="w-full bg-[#06063a] text-white py-6">
      <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between px-6 space-y-4 md:space-y-0">
        <nav className="flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-[#3498db] transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons (external links) */}
        <div className="flex space-x-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={s.icon}
                alt={s.name}
                className="h-6 w-6 hover:opacity-75 transition"
              />
            </a>
          ))}
        </div>

        {/* Visitor Counter */}
        <div className="text-sm">
          Visitor Count: {visits}
        </div>
      </div>
    </footer>
  );
}
