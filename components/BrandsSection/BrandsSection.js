'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function BrandsSection() {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.to('.brand-item', {
      xPercent: -100,
      ease: 'none',
      duration: 20,
      repeat: -1,
      stagger: 0,
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0)
      }
    });
  }, { scope: containerRef });

  return (
    <section className="bg-graphite py-16 border-y tech-border relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 mb-8 text-center relative z-10">
        <h2 className="text-2xl font-inter text-white uppercase tracking-widest">Elite Players, Trusted Partners</h2>
      </div>

      <div className="flex overflow-hidden whitespace-nowrap relative z-10 opacity-70" ref={containerRef}>
        <div className="flex w-max">
          {[...Array(2)].map((_, i) => (
            <div className="brand-item flex items-center pr-16 gap-16" key={i}>
              <i className="fab fa-nvidia text-5xl text-cyber hover:text-tactical transition-colors duration-300"></i>
              <i className="fab fa-playstation text-5xl text-cyber hover:text-cian transition-colors duration-300"></i>
              <i className="fab fa-xbox text-5xl text-cyber hover:text-tactical transition-colors duration-300"></i>
              <i className="fab fa-steam text-5xl text-cyber hover:text-white transition-colors duration-300"></i>
              <i className="fab fa-twitch text-5xl text-cyber hover:text-cian transition-colors duration-300"></i>
              <i className="fab fa-discord text-5xl text-cyber hover:text-white transition-colors duration-300"></i>
              {/* Fallback text logos if icons don't load specific brands */}
              <span className="text-3xl font-orbitron font-bold text-cyber hover:text-tactical transition-colors duration-300">ASUS ROG</span>
              <span className="text-3xl font-orbitron font-bold text-cyber hover:text-cian transition-colors duration-300">INTEL</span>
              <span className="text-3xl font-orbitron font-bold text-cyber hover:text-white transition-colors duration-300">LOGITECH G</span>
              <span className="text-3xl font-orbitron font-bold text-cyber hover:text-tactical transition-colors duration-300">VALORANT</span>
              <span className="text-3xl font-orbitron font-bold text-cyber hover:text-cian transition-colors duration-300">CS2</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
