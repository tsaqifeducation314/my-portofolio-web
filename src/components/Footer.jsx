import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/tsaqifeducation314" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/nayakasetiaji" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com/nayakasetiaji" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110">
            <FaInstagram size={24} />
          </a>
        </div>
        
        <p className="text-gray-400 text-sm">
          Dibuat dengan <FaHeart className="inline text-red-500" /> menggunakan React & TailwindCSS
        </p>
        <p className="text-gray-500 text-xs mt-2">
          © {currentYear} Nayaka Setiaji. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer