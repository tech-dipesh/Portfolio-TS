import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DarkModeToggle from './Toggle.tsx'
import MobileDrawer from '../drawer/Mobile.tsx'
import logo from '../../assets/images/logo.png'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
  { name: 'Gadgets', path: '/gadgets' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <NavLink to="/"><img src={logo} alt="Logo" className="h-10"/></NavLink>
        <nav className="hidden md:flex space-x-6">
          {links.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 dark:text-gray-200 hover:text-[#3498db] dark:hover:text-[#3498db] ${
                  isActive ? 'font-bold border-b-2 border-[#30339d]' : ''
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} links={links} />
    </header>
  )
}
