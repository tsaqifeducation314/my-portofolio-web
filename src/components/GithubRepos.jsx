import React, { useState, useEffect } from 'react'
import { FaGithub, FaStar, FaCodeBranch, FaCalendarAlt, FaExclamationCircle } from 'react-icons/fa'

const GITHUB_USERNAME = "tsaqifeducation314"

const GithubRepos = () => {
  const [repos, setRepos] = useState([])
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setLoading(true)
        
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        if (!userResponse.ok) throw new Error('User not found')
        const user = await userResponse.json()
        
        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
        const reposData = await reposResponse.json()
        
        setUserData(user)
        setRepos(reposData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchGithubData()
  }, [])

  const totalStars = repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0)
  const totalForks = repos.reduce((acc, repo) => acc + (repo.forks_count || 0), 0)

  if (loading) {
    return (
      <section id="github" className="py-20">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Memuat data GitHub...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="github" className="py-20">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8 text-center">
          <FaExclamationCircle className="text-red-500 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-red-700 dark:text-red-400 mb-2">
            Gagal Memuat Repository
          </h3>
          <p className="text-red-600 dark:text-red-300">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="github" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Repository GitHub
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Proyek open-source yang saya bagikan di GitHub
          </p>
          <div className="mt-3 inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
            <FaGithub className="text-blue-600 dark:text-blue-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              @{GITHUB_USERNAME}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {repos.map((repo) => (
            <div key={repo.id} 
                 className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white truncate flex-1">
                  <FaGithub className="inline mr-2 text-blue-500" />
                  {repo.name}
                </h3>
                <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-mono">
                  {repo.language || "Code"}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 min-h-15">
                {repo.description || "Tidak ada deskripsi ✨"}
              </p>
              
              <div className="flex gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaCodeBranch className="text-blue-500" /> {repo.forks_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-gray-500" /> {new Date(repo.updated_at).toLocaleDateString('id-ID')}
                </span>
              </div>
              
              <a href={repo.html_url} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
                Lihat Repository →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t-2 border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Statistik GitHub
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Ringkasan aktivitas dan kontribusi saya
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition">
              <div className="text-3xl font-bold text-blue-600">{userData.public_repos}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Total Repos</div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition">
              <div className="text-3xl font-bold text-green-600">{userData.followers}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Followers</div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition">
              <div className="text-3xl font-bold text-purple-600">{userData.following}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Following</div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition">
              <div className="text-3xl font-bold text-yellow-600">{totalStars}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Total Stars ⭐</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-lg mb-4 text-white dark:text-white">Repository Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className='text-white'>Total Forks</span>
                  <span className="font-bold text-blue-600">{totalForks}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className='text-white'>Total Repos</span>
                  <span className="font-bold text-blue-600">{userData.public_repos}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className='text-white'>Account Age</span>
                  <span className="font-bold text-blue-600">
                    {Math.floor((new Date() - new Date(userData.created_at)) / (1000 * 60 * 60 * 24 * 30))} Month
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-lg mb-4 text-gray-800 dark:text-white">Profile</h4>
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={userData.avatar_url} 
                  alt={userData.login}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">{userData.name || userData.login}</p>
                  <p className="text-sm text-gray-500">@{userData.login}</p>
                </div>
              </div>
              <a 
                href={userData.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition text-sm"
              >
                View GitHub Profile →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GithubRepos