import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const personalData = {
  name: "Nayaka Tsaqif R. S",
  role: "IT Undergraduate - Gadjah Mada University",
  bio: "Mahasiswa Program Studi S1 Teknologi Informasi Universitas Gadjah Mada, saat ini menempuh studi pada tahun pertama. Memiliki pengalaman organisasi dan kepemimpinan yang mumpuni melalui kegiatan Kepramukaan. Menunjukkan minat pada bidang sains dan teknologi yang dibuktikan dengan pencapaian sebagai pemenang dalam beberapa kompetisi.",
  // avatar: "https://ui-avatars.com/api/?background=1e88e5&color=fff&rounded=true&size=150&bold=true&name=" + encodeURIComponent("Nayaka Setiaji"),
  // avatar: "src/assets/profile-picture.jpg",
  email: "tsaqifeducation314@gmail.com",
  phone: "+62 812 2673 7053",
  location: "Yogyakarta, Indonesia",
  social: {
    github: "https://github.com/tsaqifeducation314",
    linkedin: "https://linkedin.com/in/nayakasetiaji",
    instagram: "https://instagram.com/nayakasetiaji"
  }
}

const profpic = "src/assets/profile-picture.jpg"

const Hero = () => {
  return (
    <section id="beranda" className="min-h-screen flex items-center justify-center py-20">
      <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 dark:border-gray-700/50">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-blue-600 rounded-full blur-2xl opacity-50"></div>
            <img 
              src={profpic} 
              alt={personalData.name}
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white dark:border-gray-700 shadow-xl object-cover object-top-right"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {personalData.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-700 dark:text-blue-400 font-semibold mb-4">
              {personalData.role}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl">
              {personalData.bio}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <FaEnvelope className="text-blue-500" /> {personalData.email}
              </span>
              <span className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-500" /> {personalData.phone}
              </span>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-500" /> {personalData.location}
              </span>
            </div>

            <div className="flex gap-6 justify-center md:justify-start">
              <a href={personalData.social.github} target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110">
                <FaGithub size={28} />
              </a>
              <a href={personalData.social.linkedin} target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110">
                <FaLinkedin size={28} />
              </a>
              <a href={personalData.social.instagram} target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110">
                <FaInstagram size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero