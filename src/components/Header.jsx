import React, { useState } from 'react'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'

const Header = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['Beranda', 'Galeri', 'GitHub', 'Kontak']

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">NS</span>
            </div>
            <span className="text-xl font-bold bg-linear-to-l linearfrom-blue-600 to-blue-800 bg-clip-text text-transparent">
              My Portofolio
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header