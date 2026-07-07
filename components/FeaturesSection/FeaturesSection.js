'use client';
import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FeaturesSection() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.ticker-item', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-20 bg-carbon relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-syne text-white uppercase mb-10 border-l-4 border-cian pl-4">This Week at Sudoku</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ticker 1: LAN Event */}
          <div className="ticker-item glass-panel p-8 relative overflow-hidden group cursor-pointer hover:border-cian/50 transition-colors duration-300">
            <div className="absolute top-0 right-0 bg-cian text-carbon font-bold px-4 py-1 text-sm uppercase">LAN Tournament</div>
            <h3 className="text-2xl font-orbitron text-cian mb-2 mt-4">VALORANT PRO-AM</h3>
            <p className="text-cyber font-mono mb-4">Friday 19:00 // Prize: $500</p>
            <Link href="/lan" className="inline-block mt-4 text-white font-inter uppercase text-sm tracking-widest hover:text-cian transition-colors">
              View Schedule <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>

          {/* Ticker 2: Shop Offer */}
          <div className="ticker-item glass-panel p-8 relative overflow-hidden group cursor-pointer hover:border-tactical/50 transition-colors duration-300">
            <div className="absolute top-0 right-0 bg-error text-white font-bold px-4 py-1 text-sm uppercase animate-pulse">Flash Sale</div>
            <h3 className="text-2xl font-orbitron text-tactical mb-2 mt-4">NVIDIA RTX 4080</h3>
            <p className="text-cyber font-mono mb-4">$1199 // Only 10 units available</p>
            <Link href="/shop" className="inline-block mt-4 text-white font-inter uppercase text-sm tracking-widest hover:text-tactical transition-colors">
              Go to Sales <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
