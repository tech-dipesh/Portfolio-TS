'use client'
import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function DarkModeToggle() {
  const [dark, setDark] = useState<boolean>(() => {
    const stored = localStorage.getItem('theme')
    return stored ? stored === 'dark' : true
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setDark(prev => !prev)}
      className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3498db]"
    >
      {dark ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-gray-800" />}
    </button>
  )
}
