'use client';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useCartStore from '../../store/useCartStore';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const container = useRef();
  const { cart } = useCartStore();
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            LAN Zone
          </Link>
          <Link href="/shop" className="text-sm font-orbitron text-cyber hover:text-white transition-colors duration-300 uppercase">
            Shop
          </Link>
          <Link href="/service" className="text-sm font-orbitron text-cyber hover:text-white transition-colors duration-300 uppercase">
            Tech Support
          </Link>
        </div>

        <div className="flex gap-4 sm:gap-6 items-center">
          <Link href="/cart" className="text-cyber hover:text-white transition-colors relative">
            <i className="fas fa-shopping-cart text-xl"></i>
            {mounted && totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-tactical text-carbon text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          
          {mounted && session ? (
            <div className="relative group flex items-center gap-2 cursor-pointer">
              <img src={session.user?.image || 'https://images.unsplash.com/photo-1566492031522-8730999966b4?ixlib=rb-4.0.3&w=100&h=100&fit=crop'} alt="User" className="w-8 h-8 rounded-full border border-cian object-cover" />
              <button onClick={() => signOut()} className="hidden group-hover:block absolute top-10 right-0 bg-carbon border border-cyber/30 px-4 py-2 text-sm text-error hover:bg-tactical/10 transition-colors whitespace-nowrap z-50">
                Sign Out
              </button>
            </div>
          ) : (
            mounted && (
              <Link href="/login" className="text-cyber hover:text-white transition-colors">
                <i className="fas fa-user text-xl"></i>
              </Link>
            )
          )}

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center ml-2">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-cian hover:text-white transition-colors"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>


          <Link 
            href="/lan" 
            className="hidden md:block bg-cian text-carbon font-inter font-bold px-6 py-2 rounded-sm uppercase tracking-wide hover:shadow-glow-cian transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Book Now
          </Link>
        </div>
      </nav>

      {/* Gamer Style Mobile Menu Modal */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-carbon border-b border-cian/20 shadow-2xl">
          <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cian via-tactical to-lilac"></div>
          
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-cian hover:text-white transition-colors text-4xl z-50"
          >
            <i className="fas fa-times"></i>
          </button>
          
          <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-sm px-6">
            <h2 className="text-3xl font-syne font-extrabold text-white uppercase tracking-widest mb-2 border-b border-cian/30 pb-4 w-full text-center">
              SYSTEM <span className="text-cian">MENU</span>
            </h2>
            
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className="w-full text-center py-4 bg-black/60 border border-cyber/30 text-white font-orbitron hover:bg-cian/20 hover:border-cian transition-all uppercase tracking-widest rounded-sm">
              Inicio
            </Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/lan" className="w-full text-center py-4 bg-black/60 border border-cyber/30 text-white font-orbitron hover:bg-cian/20 hover:border-cian transition-all uppercase tracking-widest rounded-sm">
              LAN
            </Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/service" className="w-full text-center py-4 bg-black/60 border border-cyber/30 text-white font-orbitron hover:bg-cian/20 hover:border-cian transition-all uppercase tracking-widest rounded-sm">
              Servicio Técnico
            </Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/shop" className="w-full text-center py-4 bg-black/60 border border-cyber/30 text-white font-orbitron hover:bg-cian/20 hover:border-cian transition-all uppercase tracking-widest rounded-sm">
              Store
            </Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/contact" className="w-full text-center py-4 bg-black/60 border border-cyber/30 text-white font-orbitron hover:bg-cian/20 hover:border-cian transition-all uppercase tracking-widest rounded-sm">
              Contacto
            </Link>
            
            {!session && (
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/login" className="w-full text-center mt-6 py-5 bg-cian text-carbon font-orbitron font-bold text-lg hover:shadow-glow-cian transition-all uppercase tracking-widest rounded-sm border-2 border-cian">
                Ingresar
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
