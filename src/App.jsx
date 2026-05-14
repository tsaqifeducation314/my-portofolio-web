import React, { useState } from 'react'
import './index.css'

// Import komponen
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'  // ✅ Tambahkan import Gallery
import GithubRepos from './components/GithubRepos'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="container mx-auto px-4 py-8 max-w-6xl">
          <Hero />
          <Gallery />        {/* ✅ Tambahkan komponen Gallery di sini */}
          <GithubRepos />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App