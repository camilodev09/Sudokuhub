'use client';
import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useCartStore from '../../store/useCartStore';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FEATURED = [
  {
    id: 1,
    name: 'NVIDIA RTX 4080 SUPER Founders Edition',
    price: 999.99,
    brand: 'NVIDIA',
    image: '/assets/products/prod_gpu_rtx4080_1783459916332.jpg',
    specs: '16GB GDDR6X | 2550 MHz Boost'
  },
  {
    id: 2,
    name: 'Alienware AW3423DWF QD-OLED',
    price: 899.99,
    brand: 'Dell',
    image: '/assets/products/prod_monitor_alienware_1783459923529.jpg',
    specs: '34" Curved | 165Hz | 0.1ms GtG'
  },
  {
    id: 5,
    name: 'AMD Ryzen 9 7950X3D',
    price: 699.99,
    brand: 'AMD',
    image: '/assets/products/prod_cpu_amd_1783459947344.jpg',
    specs: '16 Cores | 3D V-Cache'
  }
];

export default function FeaturedProductsSection() {
  const container = useRef();
  const addToCart = useCartStore((state) => state.addToCart);

  useGSAP(() => {
    gsap.from('.featured-card', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-carbon relative">
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-syne font-extrabold text-white uppercase tracking-tighter px-2 md:px-0">
              Featured <span className="text-cian">Hardware</span>
            </h2>
            <p className="text-cyber font-inter mt-4 max-w-xl">
              Equip your setup with the best on the market. Extreme performance guaranteed.
            </p>
          </div>
          <Link href="/shop" className="hidden md:inline-block border border-cian text-cian hover:bg-cian hover:text-carbon font-orbitron font-bold px-6 py-3 rounded-sm uppercase transition-colors duration-300">
            View Full Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {FEATURED.map((product) => (
            <div key={product.id} className="featured-card glass-panel group flex flex-col justify-between overflow-hidden relative h-full">
              <div className="relative w-full h-56 shrink-0 overflow-hidden bg-black">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-500" />
                <div className="absolute top-2 right-2 bg-carbon/80 backdrop-blur-sm border border-cyber/30 px-3 py-1 rounded-sm text-xs font-orbitron text-cian">
                  {product.brand}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-inter font-bold text-white mb-2 leading-tight">{product.name}</h3>
                <p className="text-cyber font-mono text-xs mb-6 flex-grow">{product.specs}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-syne font-extrabold text-white">${product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-tactical/20 text-tactical hover:bg-tactical hover:text-carbon border border-tactical/50 font-inter font-bold px-4 py-2 text-sm uppercase rounded-sm transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/shop" className="inline-block border border-cian text-cian hover:bg-cian hover:text-carbon font-orbitron font-bold px-8 py-3 rounded-sm uppercase transition-colors duration-300 w-full">
            View Full Shop
          </Link>
        </div>

      </div>
    </section>
  );
}
