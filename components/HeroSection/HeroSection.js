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
      
      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto mb-16 mt-16 md:mt-0">
          <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl font-syne font-extrabold text-white uppercase tracking-tighter drop-shadow-2xl leading-tight">
            Experience the <span className="text-cian">Next Level</span> of Gaming
          </h1>
          <p className="hero-text mt-6 text-lg md:text-xl font-inter text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Play on the best PCs in the country, buy elite hardware, or trust us with your rig. The ultimate ecosystem for real gamers.
          </p>
          
          <div className="hero-text mt-12 flex flex-col sm:flex-row justify-center gap-6 items-center">
            <Link href="/lan" className="bg-cian text-carbon font-orbitron font-bold px-8 py-4 rounded-sm uppercase tracking-widest hover:shadow-glow-cian transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
              Book Now
            </Link>
            <Link href="/shop" className="border border-white/20 text-white hover:bg-white hover:text-carbon font-orbitron font-bold px-8 py-4 rounded-sm uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
              View Shop
            </Link>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-12 mt-8">
            <div className="flex flex-col items-center gap-2">
              <i className="fas fa-microchip text-4xl text-cian mb-2"></i>
              <span className="font-orbitron text-lg text-white">Powered By</span>
              <span className="font-inter text-gray-400 text-sm">RTX 4080 & i9</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <i className="fas fa-wifi text-4xl text-cian mb-2"></i>
              <span className="font-orbitron text-lg text-white">Zero Lag</span>
              <span className="font-inter text-gray-400 text-sm">1Gbps Symmetric</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <i className="fas fa-trophy text-4xl text-cian mb-2"></i>
              <span className="font-orbitron text-lg text-white">Elite Tournaments</span>
              <span className="font-inter text-gray-400 text-sm">Weekly Prize Pools</span>
            </div>
        </div>
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
