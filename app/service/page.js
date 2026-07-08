'use client';
import { useState } from 'react';

export default function ServicePage() {
  const [formData, setFormData] = useState({ name: '', email: '', issue: '' });

  return (
    <div className="pt-20 min-h-screen bg-carbon overflow-hidden">
      
      {/* Header */}
      <div className="bg-graphite border-b tech-border py-16 relative">
        <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-syne font-extrabold text-white tracking-tighter uppercase px-2 md:px-0">Expert Tech <span className="text-cian">Support</span></h1>
          <p className="mt-4 font-mono text-cyber max-w-2xl mx-auto">Precise diagnostics. Real solutions. Maximum performance.</p>
        </div>
      </div>

      {/* Z-Pattern Services */}
      <div className="container mx-auto px-4 py-24 flex flex-col gap-24">
        
        {/* Service 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 group">
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-80 bg-graphite border tech-border overflow-hidden rounded-sm">
              <img src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3" alt="Mantenimiento" className="w-full h-full object-cover mix-blend-luminosity opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-cian/10 mix-blend-color"></div>
              <div className="absolute top-4 left-4 text-6xl font-orbitron text-cian opacity-20">01</div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-orbitron text-cian mb-4">Preventive Maintenance</h2>
            <p className="text-cyber font-inter text-lg leading-relaxed mb-6">Deep component cleaning, high-performance thermal paste application (Liquid Metal or Ouroboros), and airflow optimization to drastically reduce temperatures.</p>
            <ul className="text-white font-mono text-sm space-y-2">
              <li><i className="fas fa-check text-cian mr-2"></i>Complete Disassembly</li>
              <li><i className="fas fa-check text-cian mr-2"></i>Ultrasonic Cleaning</li>
              <li><i className="fas fa-check text-cian mr-2"></i>Cable Management</li>
            </ul>
          </div>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 group">
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-80 bg-graphite border tech-border overflow-hidden rounded-sm">
              <img src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-4.0.3" alt="Upgrades" className="w-full h-full object-cover mix-blend-luminosity opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-tactical/10 mix-blend-color"></div>
              <div className="absolute top-4 right-4 text-6xl font-orbitron text-tactical opacity-20">02</div>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-left md:text-right">
            <h2 className="text-3xl font-orbitron text-tactical mb-4">Upgrades & Custom Builds</h2>
            <p className="text-cyber font-inter text-lg leading-relaxed mb-6">Bottleneck? Advice and installation of new GPUs, CPUs, or Custom Loop liquid cooling systems for enthusiasts.</p>
            <ul className="text-white font-mono text-sm space-y-2 inline-block text-left">
              <li><i className="fas fa-check text-tactical mr-2"></i>Hardware Installation</li>
              <li><i className="fas fa-check text-tactical mr-2"></i>BIOS/XMP Configuration</li>
              <li><i className="fas fa-check text-tactical mr-2"></i>Stability Stress Tests</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Quote Form */}
      <div className="bg-graphite py-24 border-t tech-border relative">
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-3xl font-syne text-white uppercase text-center mb-10">Request Tech Quote</h2>
          
          <form className="glass-panel p-8 md:p-12 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-6">
              <input type="text" placeholder="Full Name" className="w-full md:w-1/2 bg-black/50 border border-cyber/30 rounded-sm px-4 py-3 text-white font-mono focus:border-cian focus:outline-none transition-colors" />
              <input type="email" placeholder="Email Address" className="w-full md:w-1/2 bg-black/50 border border-cyber/30 rounded-sm px-4 py-3 text-white font-mono focus:border-cian focus:outline-none transition-colors" />
            </div>
            <textarea placeholder="Describe the issue in detail or the components you wish to install..." rows="5" className="w-full bg-black/50 border border-cyber/30 rounded-sm px-4 py-3 text-white font-mono focus:border-cian focus:outline-none transition-colors resize-none"></textarea>
            
            <button type="submit" className="w-full bg-cian text-carbon font-orbitron font-bold text-lg px-6 py-4 rounded-sm uppercase tracking-widest hover:shadow-glow-cian transition-all duration-300 transform hover:-translate-y-1">
              Submit Request
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
