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
          <div className="ticker-item glass-panel relative overflow-hidden group cursor-pointer hover:border-cian/50 transition-colors duration-300 min-h-[250px] flex flex-col justify-end p-8">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-transparent"></div>
            <div className="absolute top-4 right-4 bg-cian text-carbon font-bold px-4 py-1 text-sm uppercase z-10 rounded-sm">LAN Tournament</div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-orbitron text-cian mb-2">VALORANT PRO-AM</h3>
              <p className="text-white font-mono mb-4">Friday 19:00 // Prize: $500</p>
              <Link href="/lan" className="inline-block text-white font-inter uppercase text-sm tracking-widest hover:text-cian transition-colors">
                View Schedule <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>

          {/* Ticker 2: Shop Offer */}
          <div className="ticker-item glass-panel relative overflow-hidden group cursor-pointer hover:border-tactical/50 transition-colors duration-300 min-h-[250px] flex flex-col justify-end p-8">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-transparent"></div>
            <div className="absolute top-4 right-4 bg-error text-white font-bold px-4 py-1 text-sm uppercase animate-pulse z-10 rounded-sm">Flash Sale</div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-orbitron text-tactical mb-2">NVIDIA RTX 4080</h3>
              <p className="text-white font-mono mb-4">$1199 // Only 10 units available</p>
              <Link href="/shop" className="inline-block text-white font-inter uppercase text-sm tracking-widest hover:text-tactical transition-colors">
                Go to Sales <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
