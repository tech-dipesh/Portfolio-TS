import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import DarkModeToggle from './Toggle'
import MobileDrawer from '../drawer/Mobile'
import logo from '../../assets/images/me.png'

// same like footer
const links = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Gadgets', path: '/gadgets' },
  { name: 'Contact', path: '/contact' },
  { name: 'Resume', path: '/resume' },
  { name: 'About', path: '/about' },
]

export default function Navbar() {
  // for changing state constantlly
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    // <header className="w-full bg-white dark:bg-gray-900 shadow-md px-6 py-4">
    <header className="w-full bg-[#06063a] shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
        <nav className="hidden md:flex space-x-6">
          {/* i can use the normal ul li but i want to use the power of the dynamic stylying */}
          {links.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 dark:text-gray-200 hover:text-[#3498db] cursor-pointer transition ${
                  isActive ? 'font-bold cursor-pointer border-b-2 border-[#8a2be2]' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          <button className="md:hidden" onClick={() => setDrawerOpen(true)}>
            <svg
              className="w-6 h-6 text-gray-700 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} links={links} />
        {/* this for the mobile specfiic which i'm not able to work properly. */}
    </header>
)
}