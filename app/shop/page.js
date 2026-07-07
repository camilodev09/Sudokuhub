'use client';
import { useState, useEffect } from 'react';
import useCartStore from '../../store/useCartStore';
import { supabase } from '../../lib/supabase';

const FALLBACK_PRODUCTS = [
  {
    id: 1,
    name: 'NVIDIA RTX 4080 SUPER Founders Edition',
    price: 999.99,
    category: 'GPU',
    brand: 'NVIDIA',
    image: '/assets/products/prod_gpu_rtx4080_1783459916332.jpg',
    specs: '16GB GDDR6X | 2550 MHz Boost | 10240 CUDA Cores'
  },
  {
    id: 2,
    name: 'Alienware AW3423DWF QD-OLED',
    price: 899.99,
    category: 'Monitors',
    brand: 'Dell',
    image: '/assets/products/prod_monitor_alienware_1783459923529.jpg',
    specs: '34" Curved | 165Hz | 0.1ms GtG | HDR400 True Black'
  },
  {
    id: 3,
    name: 'Intel Core i9-14900K',
    price: 589.99,
    category: 'CPU',
    brand: 'Intel',
    image: '/assets/products/prod_cpu_intel_1783459932288.jpg',
    specs: '24 Cores (8P+16E) | Up to 6.0 GHz | 36MB Cache'
  },
  {
    id: 4,
    name: 'Logitech G PRO X Superlight 2',
    price: 159.99,
    category: 'Peripherals',
    brand: 'Logitech G',
    image: '/assets/products/prod_mouse_logitech_1783459939450.jpg',
    specs: '60g Ultra-light | HERO 2 Sensor | LIGHTSPEED Wireless'
  },
  {
    id: 5,
    name: 'AMD Ryzen 9 7950X3D',
    price: 699.99,
    category: 'CPU',
    brand: 'AMD',
    image: '/assets/products/prod_cpu_amd_1783459947344.jpg',
    specs: '16 Cores | 3D V-Cache | Up to 5.7 GHz'
  },
  {
    id: 6,
    name: 'ASUS ROG Strix B650E-F',
    price: 299.99,
    category: 'Motherboards',
    brand: 'ASUS',
    image: '/assets/products/prod_mobo_asus_1783460006803.jpg',
    specs: 'AM5 | PCIe 5.0 | WiFi 6E'
  },
  {
    id: 7,
    name: 'Corsair Dominator Titanium 64GB',
    price: 279.99,
    category: 'Memory',
    brand: 'Corsair',
    image: '/assets/products/prod_ram_corsair_1783460030347.jpg',
    specs: 'DDR5 6000MHz | CL30 | RGB'
  },
  {
    id: 8,
    name: 'Razer DeathAdder V3 Pro',
    price: 149.99,
    category: 'Peripherals',
    brand: 'Razer',
    image: '/assets/products/prod_mouse_razer_1783460037552.jpg',
    specs: '63g | Focus Pro 30K | Ergonomic'
  },
  {
    id: 9,
    name: 'Samsung 990 PRO 2TB',
    price: 189.99,
    category: 'Storage',
    brand: 'Samsung',
    image: '/assets/products/prod_ssd_samsung_1783460045180.jpg',
    specs: 'NVMe M.2 | Up to 7450 MB/s Read'
  }
];

export default function ShopPage() {
  const addToCart = useCartStore((state) => state.addToCart);
  const [filterBrand, setFilterBrand] = useState('All');
  const [products, setProducts] = useState(FALLBACK_PRODUCTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('id', { ascending: true });
        
      if (data && data.length > 0) {
        setProducts(data);
      } else {
        if (error) console.error('Error fetching products from Supabase, using fallback:', error);
        // Retain FALLBACK_PRODUCTS if DB is empty or errors out
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const filteredProducts = filterBrand === 'All' 
    ? products 
    : products.filter(p => p.brand === filterBrand);
    
  const uniqueBrands = ['All', ...new Set(products.map(p => p.brand))];

  return (
    <div className="pt-20 min-h-screen bg-carbon">
      {/* Editorial Banner */}
      <div className="relative w-full h-[35vh] overflow-hidden mb-12 mt-12 md:mt-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-4.0.3')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-carbon to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-syne font-extrabold text-cian tracking-tighter uppercase drop-shadow-2xl">Pro Hardware</h1>
            <p className="text-gray-300 font-inter text-base md:text-lg mt-4 max-w-2xl mx-auto">Equip your battle station with the industry's best hardware.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-24 flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-1/4 glass-panel p-6 h-fit sticky top-24">
          <h2 className="text-xl font-orbitron text-cian mb-6 uppercase border-b border-cyber/30 pb-2">Filters</h2>
          <div className="mb-6">
            <h3 className="text-white font-inter font-bold mb-3">Brands</h3>
            <div className="flex flex-col gap-2">
              {uniqueBrands.map(brand => (
                <label key={brand} onClick={() => setFilterBrand(brand)} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 rounded-sm border ${filterBrand === brand ? 'bg-cian border-cian' : 'border-cyber group-hover:border-cian transition-colors'}`}></div>
                  <span className={`text-sm font-inter ${filterBrand === brand ? 'text-white' : 'text-cyber group-hover:text-white transition-colors'}`}>
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="glass-panel group flex flex-col justify-between overflow-hidden relative">
              <div className="relative w-full h-48 overflow-hidden bg-black">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-500" />
                <div className="absolute top-2 right-2 bg-carbon/80 backdrop-blur-sm border border-cyber/30 px-3 py-1 rounded-sm text-xs font-orbitron text-cian">
                  {product.brand}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-inter font-bold text-white mb-2 leading-tight">{product.name}</h3>
                <p className="text-cyber font-mono text-xs mb-4 flex-grow">{product.specs}</p>
                <div className="flex items-end justify-between mt-auto">
                  <span className="text-2xl font-syne font-extrabold text-cian">${product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-cian text-carbon font-inter font-bold px-4 py-2 text-sm uppercase rounded-sm hover:shadow-glow-cian transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
