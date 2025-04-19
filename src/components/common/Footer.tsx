import useVisitorCounter from "../hooks/visitCount.tsx"
import githubIcon from '../../assets/icons/github.png'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import discordIcon from '../../assets/icons/discord.svg'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
  { name: 'Gadgets', path: '/gadgets' },
  { name: 'Contact', path: '/contact' },
]

const socials = [
  { icon: githubIcon, url: 'https://github.com' },
  { icon: linkedinIcon, url: 'https://linkedin.com' },
  { icon: twitterIcon, url: 'https://twitter.com' },
  { icon: discordIcon, url: 'https://discord.com' },
]

export default function Footer() {
  const visits = useVisitorCounter()
  return (
    <footer className="sticky bottom-0 z-40 bg-white dark:bg-gray-900 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6">
        <div className="flex space-x-4">
          {links.map(link => (
            <a key={link.path} href={link.path} className="text-gray-600 dark:text-gray-300 hover:text-[#3498db]">
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex space-x-4 my-2 md:my-0">
          {socials.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noreferrer">
              <img src={s.icon} alt="" className="h-6 w-6 hover:opacity-75"/>
            </a>
          ))}
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">
          Visitor Count: {visits}
        </div>
      </div>
    </footer>
  )
}
