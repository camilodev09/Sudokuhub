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
    <section ref={container} className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden pt-20 md:pt-0">
      
      {/* Absolute Centered Text Overlay (H1 & H2) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none text-center px-4">
        <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl font-syne font-extrabold text-white uppercase tracking-tighter drop-shadow-2xl max-w-4xl leading-tight">
          Donde el Gaming <br className="hidden md:block" />se vuelve <span className={hoveredSide === 'lan' ? 'text-cian transition-colors duration-500' : hoveredSide === 'shop' ? 'text-tactical transition-colors duration-500' : 'text-white transition-colors duration-500'}>Experiencia.</span>
        </h1>
        <h2 className="hero-text mt-6 text-lg md:text-xl font-inter text-cyber max-w-2xl">
          Reserva tu estación de batalla, equipa tu set-up o potencia tu PC con nuestro servicio experto.
        </h2>
      </div>

      {/* LAN Split (Left) */}
      <div 
        className={`relative w-full md:w-1/2 h-1/2 md:h-full transition-all duration-700 ease-in-out cursor-pointer group flex items-end justify-center pb-12 md:pb-24 z-10
          ${hoveredSide === 'shop' ? 'md:w-1/3 opacity-40 grayscale' : 'md:w-1/2'} 
          ${hoveredSide === 'lan' ? 'md:w-2/3' : ''}`}
        onMouseEnter={() => setHoveredSide('lan')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-transparent"></div>
        <div className="absolute inset-0 bg-cian/10 mix-blend-color"></div>
        
        <Link href="/lan" className="hero-text relative z-30 pointer-events-auto">
          <button className="bg-cian text-carbon font-orbitron font-bold text-lg md:text-xl px-8 py-4 rounded-sm uppercase tracking-widest hover:shadow-glow-cian transition-all duration-300 transform group-hover:-translate-y-2">
            Reservar PC / LAN
          </button>
        </Link>
      </div>

      {/* SHOP Split (Right) */}
      <div 
        className={`relative w-full md:w-1/2 h-1/2 md:h-full transition-all duration-700 ease-in-out cursor-pointer group flex items-end justify-center pb-12 md:pb-24 z-10
          ${hoveredSide === 'lan' ? 'md:w-1/3 opacity-40 grayscale' : 'md:w-1/2'} 
          ${hoveredSide === 'shop' ? 'md:w-2/3' : ''}`}
        onMouseEnter={() => setHoveredSide('shop')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-transparent"></div>
        <div className="absolute inset-0 bg-tactical/10 mix-blend-color"></div>
        
        <Link href="/shop" className="hero-text relative z-30 pointer-events-auto">
          <button className="bg-tactical text-carbon font-orbitron font-bold text-lg md:text-xl px-8 py-4 rounded-sm uppercase tracking-widest hover:shadow-glow-tactical transition-all duration-300 transform group-hover:-translate-y-2">
            Visitar Tienda
          </button>
        </Link>
      </div>

    </section>
  );
}
