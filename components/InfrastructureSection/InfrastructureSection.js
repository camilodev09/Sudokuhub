'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function InfrastructureSection() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.infra-card', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-carbon relative border-y border-white/10">
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-white uppercase tracking-tighter">
            Enterprise-Grade <span className="text-cian">Infrastructure</span>
          </h2>
          <p className="text-cyber font-inter mt-6">
            We don't just build gaming setups; we engineer high-availability network architectures. Experience zero packet loss and absolute frame stability powered by our server-grade ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Card 1 */}
          <div className="infra-card glass-panel p-8 group hover:-translate-y-1 transition-transform duration-300 cursor-default h-full flex flex-col">
            <div className="w-12 h-12 shrink-0 bg-graphite border border-white/10 rounded-sm flex items-center justify-center mb-6 group-hover:border-cian transition-colors">
              <i className="fas fa-server text-2xl text-cian"></i>
            </div>
            <h3 className="text-xl font-inter font-bold text-white mb-3">Dedicated Blade Servers</h3>
            <p className="text-cyber font-mono text-sm leading-relaxed mb-4 flex-grow">
              Local game caching and dedicated routing tables ensure sub-1ms pings to regional match-making servers.
            </p>
            <div className="h-[1px] w-full bg-white/10 mb-4 group-hover:bg-cian/50 transition-colors mt-auto"></div>
            <span className="text-cian font-mono text-xs uppercase tracking-widest shrink-0">99.99% Uptime SLA</span>
          </div>

          {/* Card 2 */}
          <div className="infra-card glass-panel p-8 group hover:-translate-y-1 transition-transform duration-300 cursor-default h-full flex flex-col">
            <div className="w-12 h-12 shrink-0 bg-graphite border border-white/10 rounded-sm flex items-center justify-center mb-6 group-hover:border-cian transition-colors">
              <i className="fas fa-network-wired text-2xl text-cian"></i>
            </div>
            <h3 className="text-xl font-inter font-bold text-white mb-3">Symmetric 10Gbps Backbone</h3>
            <p className="text-cyber font-mono text-sm leading-relaxed mb-4 flex-grow">
              Dual-WAN fiber connections with automatic failover. Your stream or match will never drop due to ISP routing issues.
            </p>
            <div className="h-[1px] w-full bg-white/10 mb-4 group-hover:bg-cian/50 transition-colors mt-auto"></div>
            <span className="text-cian font-mono text-xs uppercase tracking-widest shrink-0">Zero Packet Loss</span>
          </div>

          {/* Card 3 */}
          <div className="infra-card glass-panel p-8 group hover:-translate-y-1 transition-transform duration-300 cursor-default h-full flex flex-col">
            <div className="w-12 h-12 shrink-0 bg-graphite border border-white/10 rounded-sm flex items-center justify-center mb-6 group-hover:border-cian transition-colors">
              <i className="fas fa-snowflake text-2xl text-cian"></i>
            </div>
            <h3 className="text-xl font-inter font-bold text-white mb-3">Cryogenic Climate Control</h3>
            <p className="text-cyber font-mono text-sm leading-relaxed mb-4 flex-grow">
              HVAC systems designed for data centers keep our floor at an optimal 18°C, ensuring maximum boost clocks on all RTX 4090s.
            </p>
            <div className="h-[1px] w-full bg-white/10 mb-4 group-hover:bg-cian/50 transition-colors mt-auto"></div>
            <span className="text-cian font-mono text-xs uppercase tracking-widest shrink-0">Thermal Stability</span>
          </div>
        </div>

      </div>
    </section>
  );
}
