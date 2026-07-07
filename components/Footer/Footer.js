'use client';
import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Footer() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.footer-element', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 95%',
      },
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }, { scope: container });

  return (
    <footer ref={container} className="bg-graphite border-t tech-border py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="footer-element flex flex-col items-center md:items-start">
          <Link href="/">
            <img src="/assets/logoletra.svg" alt="Sudoku Games" className="h-8 md:h-10 w-auto" />
          </Link>
          <p className="text-cyber font-mono text-sm mt-2">© 2026 Sudoku Games. All rights reserved.</p>
        </div>

        <div className="footer-element flex gap-6 items-center">
          <Link href="/lan" className="text-sm font-orbitron text-cyber hover:text-white transition-colors duration-300 uppercase">LAN</Link>
          <Link href="/shop" className="text-sm font-orbitron text-cyber hover:text-white transition-colors duration-300 uppercase">Shop</Link>
          <Link href="/service" className="text-sm font-orbitron text-cyber hover:text-white transition-colors duration-300 uppercase">Service</Link>
          <Link href="/contact" className="text-sm font-orbitron text-cyber hover:text-white transition-colors duration-300 uppercase">Contact</Link>
        </div>

        <div className="footer-element flex gap-4">
          <Link href="#" className="w-10 h-10 rounded-full border border-cyber/30 flex items-center justify-center text-cyber hover:text-cian hover:border-cian transition-all duration-300">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="#" className="w-10 h-10 rounded-full border border-cyber/30 flex items-center justify-center text-cyber hover:text-cian hover:border-cian transition-all duration-300">
            <i className="fab fa-tiktok"></i>
          </Link>
          <Link href="#" className="w-10 h-10 rounded-full border border-cyber/30 flex items-center justify-center text-cyber hover:text-cian hover:border-cian transition-all duration-300">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>

      </div>
    </footer>
  );
}
