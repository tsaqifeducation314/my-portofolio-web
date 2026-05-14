import React, { useState } from 'react'



const Gallery = () => {
  const images = [
    {
      id: 1,
      url: './images/image1.jpeg',
      title: 'Cultural Festival 15 - UGM Residence',
      photographer: 'Tsaqif'
    },
    {
      id: 2,
      url: './images/image2.jpeg',
      title: 'Event Waste Management - Lokalogi',
      photographer: 'Tsaqif'
    },
    {
      id: 3,
      url: './images/image3.jpeg',
      title: 'ENFORUN 2025 - DTETI',
      photographer: 'Tsaqif'
    },
    {
      id: 4,
      url: './images/image4.jpeg',
      title: 'Pendidikan Dasar - UKM Pramuka UGM',
      photographer: 'Tsaqif'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section id="galeri" className="py-20 bg-linear-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-xl">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Galeri Foto
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Koleksi foto kegiatan yang pernah saya ikuti
          </p>
        </div>

        <div className="relative group">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
            <div className="relative aspect-16/10 md:aspect-video">
              <img
                src={images[currentIndex].url}
                alt={images[currentIndex].title}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out"
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {images[currentIndex].title}
                </h3>
                <p className="text-sm opacity-90">
                  Foto oleh: {images[currentIndex].photographer}
                </p>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Gambar sebelumnya"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Gambar berikutnya"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? 'w-8 h-2 bg-blue-600'
                    : 'w-2 h-2 bg-gray-400 hover:bg-blue-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            Galeri Lainnya
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {images.slice(0, 4).map((image, index) => (
              <div
                key={image.id}
                onClick={() => goToSlide(index)}
                className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-24 md:h-32 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery