'use client';
import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ConsolesSection() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.bento-card', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      },
      scale: 0.95,
      y: 50,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-20 bg-carbon">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-syne text-white uppercase mb-10 border-l-4 border-tactical pl-4">The Complete Ecosystem</h2>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          
          {/* Card 1: LAN (Large) */}
          <Link href="/lan" className="bento-card md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-sm glass-panel block h-64 md:h-full">
            <div className="absolute inset-0 bg-[url('/assets/hero_lan_neon_1783457264592.jpg')] bg-cover bg-center mix-blend-overlay opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 z-10">
              <h3 className="text-3xl font-orbitron text-cian mb-2">HIGH PERFORMANCE LAN ZONE</h3>
              <p className="text-cyber font-mono max-w-md">50+ Stations equipped with RTX 4070, 240Hz monitors and 1Gbps symmetric fiber. Zero lag. Pure skill.</p>
            </div>
          </Link>

          {/* Card 2: Shop (Top Right) */}
          <Link href="/shop" className="bento-card relative overflow-hidden rounded-sm glass-panel block h-64 md:h-auto group">
            <div className="absolute inset-0 bg-[url('/assets/hero_shop_neon_1783457274268.jpg')] bg-cover bg-center mix-blend-overlay opacity-40 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <h3 className="text-xl font-orbitron text-lilac mb-2">PRO HARDWARE SHOP</h3>
              <p className="text-cyber font-mono text-sm">Custom PCs, elite peripherals and the latest physical/digital releases.</p>
            </div>
          </Link>

          {/* Card 3: Tech Service (Bottom Right) */}
          <Link href="/service" className="bento-card relative overflow-hidden rounded-sm glass-panel block h-64 md:h-auto group">
            <div className="absolute inset-0 bg-[url('/assets/tech_service_neon_1783457283574.jpg')] bg-cover bg-center mix-blend-luminosity opacity-30 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-transparent"></div>
            <div className="absolute inset-0 bg-cyber-grid opacity-50"></div>
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <h3 className="text-xl font-orbitron text-tactical mb-2">EXPERT TECH SERVICE</h3>
              <p className="text-cyber font-mono text-sm">Preventive maintenance, upgrades and certified repair of PCs and consoles.</p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
