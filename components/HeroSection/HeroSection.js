'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HeroSection() {
  const container = useRef();
  const [hoveredSide, setHoveredSide] = useState(null); // 'lan', 'shop', or null

  useGSAP(() => {
    // Entrance animations
    gsap.from('.hero-text', {
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.5
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-screen md:h-screen flex flex-col md:flex-row overflow-x-hidden pt-28 md:pt-0 bg-carbon">
      
      {/* Text Overlay (Relative on Mobile, Absolute on Desktop) */}
      <div className="relative md:absolute md:inset-0 z-20 flex flex-col items-center justify-center pointer-events-none text-center px-4 mb-10 md:mb-0">
        <h1 className="hero-text text-5xl md:text-6xl lg:text-7xl font-syne font-extrabold text-white tracking-tighter drop-shadow-2xl max-w-4xl leading-tight">
          Unleash <br className="hidden md:block" />the <span className={hoveredSide === 'lan' ? 'text-cian transition-colors duration-500' : hoveredSide === 'shop' ? 'text-lilac transition-colors duration-500' : 'text-white transition-colors duration-500'}>Gamer</span> in You!
        </h1>
        <h2 className="hero-text mt-6 md:mt-6 text-lg md:text-xl font-inter text-gray-200 max-w-2xl font-light">
          Welcome to the most exciting video game store. <br />
          Get ready to immerse yourself in the most anticipated video game of the year.
        </h2>
      </div>

      {/* LAN Split (Left/Top) */}
      <div 
        className={`relative h-72 w-[calc(100%-2rem)] mx-auto mb-6 rounded-2xl md:h-full md:mx-0 md:mb-0 md:rounded-none transition-all duration-700 ease-in-out cursor-pointer group flex items-center md:items-end justify-center pb-0 md:pb-24 z-10 overflow-hidden
          ${hoveredSide === 'shop' ? 'md:w-1/3 opacity-40 grayscale' : 'md:w-1/2'} 
          ${hoveredSide === 'lan' ? 'md:w-2/3' : ''}`}
        onMouseEnter={() => setHoveredSide('lan')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="absolute inset-0 bg-[url('/assets/hero_lan_neon_1783457264592.jpg')] bg-cover bg-center mix-blend-overlay opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-transparent"></div>
        <div className="absolute inset-0 bg-cian/10 mix-blend-color"></div>
        
        <Link href="/lan" className="hero-text relative z-30 pointer-events-auto">
          <button className="bg-cian text-carbon font-orbitron font-bold text-lg md:text-xl px-8 py-4 rounded-sm uppercase tracking-widest hover:shadow-glow-cian transition-all duration-300 transform group-hover:-translate-y-2">
            Explore LAN
          </button>
        </Link>
      </div>

      {/* SHOP Split (Right/Bottom) */}
      <div 
        className={`relative h-72 w-[calc(100%-2rem)] mx-auto mb-6 rounded-2xl md:h-full md:mx-0 md:mb-0 md:rounded-none transition-all duration-700 ease-in-out cursor-pointer group flex items-center md:items-end justify-center pb-0 md:pb-24 z-10 overflow-hidden
          ${hoveredSide === 'lan' ? 'md:w-1/3 opacity-40 grayscale' : 'md:w-1/2'} 
          ${hoveredSide === 'shop' ? 'md:w-2/3' : ''}`}
        onMouseEnter={() => setHoveredSide('shop')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="absolute inset-0 bg-[url('/assets/hero_shop_neon_1783457274268.jpg')] bg-cover bg-center mix-blend-overlay opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-transparent"></div>
        <div className="absolute inset-0 bg-lilac/10 mix-blend-color"></div>
        
        <Link href="/shop" className="hero-text relative z-30 pointer-events-auto">
          <button className="bg-lilac text-carbon font-orbitron font-bold text-lg md:text-xl px-8 py-4 rounded-sm uppercase tracking-widest hover:shadow-glow-lilac transition-all duration-300 transform group-hover:-translate-y-2">
            Search Store
          </button>
        </Link>
      </div>

    </section>
  );
}
