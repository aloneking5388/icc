import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
      <section className="bg-gradient-to-r from-blue-100 to-blue-300 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            International Childcare (ICC)
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-lg">
            Equitable access to early childhood care and education across Uganda.
          </p>
          <Link
            href="/about"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Learn More
          </Link>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/hero2.jpg"
            alt="Childcare in Uganda"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection