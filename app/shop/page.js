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
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: '16GB GDDR6X | 2550 MHz Boost | 10240 CUDA Cores'
  },
  {
    id: 2,
    name: 'Alienware AW3423DWF QD-OLED',
    price: 899.99,
    category: 'Monitors',
    brand: 'Dell',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: '34" Curved | 165Hz | 0.1ms GtG | HDR400 True Black'
  },
  {
    id: 3,
    name: 'Intel Core i9-14900K',
    price: 589.99,
    category: 'CPU',
    brand: 'Intel',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: '24 Cores (8P+16E) | Up to 6.0 GHz | 36MB Cache'
  },
  {
    id: 4,
    name: 'Logitech G PRO X Superlight 2',
    price: 159.99,
    category: 'Peripherals',
    brand: 'Logitech G',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: '60g Ultra-light | HERO 2 Sensor | LIGHTSPEED Wireless'
  },
  {
    id: 5,
    name: 'AMD Ryzen 9 7950X3D',
    price: 699.99,
    category: 'CPU',
    brand: 'AMD',
    image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: '16 Cores | 3D V-Cache | Up to 5.7 GHz'
  },
  {
    id: 6,
    name: 'ASUS ROG Strix B650E-F',
    price: 299.99,
    category: 'Motherboards',
    brand: 'ASUS',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: 'AM5 | PCIe 5.0 | WiFi 6E'
  },
  {
    id: 7,
    name: 'Corsair Dominator Titanium 64GB',
    price: 279.99,
    category: 'Memory',
    brand: 'Corsair',
    image: 'https://images.unsplash.com/photo-1562976540-1502f75a6c0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: 'DDR5 6000MHz | CL30 | RGB'
  },
  {
    id: 8,
    name: 'Razer DeathAdder V3 Pro',
    price: 149.99,
    category: 'Peripherals',
    brand: 'Razer',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: '63g | Focus Pro 30K | Ergonomic'
  },
  {
    id: 9,
    name: 'Samsung 990 PRO 2TB',
    price: 189.99,
    category: 'Storage',
    brand: 'Samsung',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      <div className="relative w-full h-[40vh] overflow-hidden mb-12">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-4.0.3')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-carbon to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-syne font-extrabold text-cian tracking-tighter uppercase drop-shadow-2xl">Pro Hardware</h1>
            <p className="text-white font-inter text-lg mt-4 max-w-2xl">Equipa tu estación de batalla con el mejor hardware de la industria.</p>
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
