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
      opacity: 0,
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
        <h2 className="text-3xl font-syne text-white uppercase mb-10 border-l-4 border-tactical pl-4">El Ecosistema Completo</h2>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          
          {/* Card 1: LAN (Large) */}
          <Link href="/lan" className="bento-card md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-sm glass-panel block h-64 md:h-full">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 z-10">
              <h3 className="text-3xl font-orbitron text-cian mb-2">ZONA LAN DE ALTO RENDIMIENTO</h3>
              <p className="text-cyber font-mono max-w-md">50+ Estaciones equipadas con RTX 4070, monitores 240Hz y red de fibra simétrica 1Gbps. Zero lag. Puro skill.</p>
            </div>
          </Link>

          {/* Card 2: Shop (Top Right) */}
          <Link href="/shop" className="bento-card relative overflow-hidden rounded-sm glass-panel block h-64 md:h-auto group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay opacity-40 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <h3 className="text-xl font-orbitron text-tactical mb-2">TIENDA HARDWARE PRO</h3>
              <p className="text-cyber font-mono text-sm">PCs Armadas, periféricos élite y los últimos lanzamientos físicos/digitales.</p>
            </div>
          </Link>

          {/* Card 3: Tech Service (Bottom Right) */}
          <Link href="/service" className="bento-card relative overflow-hidden rounded-sm glass-panel block h-64 md:h-auto group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-luminosity opacity-30 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-transparent"></div>
            <div className="absolute inset-0 bg-cyber-grid opacity-50"></div>
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <h3 className="text-xl font-orbitron text-white mb-2">SERVICIO TÉCNICO EXPERTO</h3>
              <p className="text-cyber font-mono text-sm">Mantenimiento preventivo, upgrades y reparación certificada de PCs y consolas.</p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
