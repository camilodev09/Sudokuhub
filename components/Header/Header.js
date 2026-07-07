'use client';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useCartStore from '../../store/useCartStore';

export default function Header() {
  const container = useRef();
  const { cart } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  useGSAP(() => {
    gsap.from(container.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <header 
      ref={container}
      className="fixed top-0 w-full z-50 bg-carbon/90 backdrop-blur-md border-b border-white/5 shadow-lg"
    >
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none"></div>
      <nav className="relative container mx-auto px-4 h-20 flex justify-between items-center">
        <Link href="/">
          <img src="/assets/logoletra.svg" alt="Sudoku Games" className="h-8 md:h-10 w-auto" />
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/lan" className="text-sm font-orbitron text-cyber hover:text-white transition-colors duration-300 uppercase">
            Zona LAN
          </Link>
          <Link href="/shop" className="text-sm font-orbitron text-cyber hover:text-white transition-colors duration-300 uppercase">
            Tienda
          </Link>
          <Link href="/service" className="text-sm font-orbitron text-cyber hover:text-white transition-colors duration-300 uppercase">
            Servicio Técnico
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <button className="text-cyber hover:text-white transition-colors">
            <i className="fas fa-search text-xl"></i>
          </button>
          <Link href="/cart" className="text-cyber hover:text-white transition-colors relative">
            <i className="fas fa-shopping-cart text-xl"></i>
            {mounted && totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-tactical text-carbon text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <Link 
            href="/lan" 
            className="hidden md:block bg-cian text-carbon font-inter font-bold px-6 py-2 rounded-sm uppercase tracking-wide hover:shadow-glow-cian transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Reservar
          </Link>
        </div>
      </nav>
    </header>
  );
}
